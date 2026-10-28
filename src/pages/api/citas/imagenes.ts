import type { APIRoute } from 'astro';

const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
const MAX_FILE_SIZE_BYTES = 15 * 1024 * 1024; // 15 MB máximo por archivo (ajustable)

export const POST: APIRoute = async ({ request }) => {
  try {
    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ message: 'Error de configuración en el servidor.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const formData = await request.formData();

    const firstName = formData.get('firstName')?.toString() ?? '';
    const lastName = formData.get('lastName')?.toString() ?? '';
    const documentType = formData.get('documentType')?.toString() ?? '';
    const documentNumber = formData.get('documentNumber')?.toString() ?? '';
    const email = formData.get('email')?.toString() ?? '';
    const phone = formData.get('phone')?.toString() ?? '';
    const phoneAlt = formData.get('phoneAlt')?.toString() ?? 'No especificado';

    const attachments = [];

    // Manejo de archivo 1: Autorización (documentsPdf)
    const documentsPdf = formData.get('documentsPdf') as File | null;
    if (documentsPdf && documentsPdf.size > 0) {
      if (documentsPdf.size > MAX_FILE_SIZE_BYTES) {
        return new Response(
          JSON.stringify({ message: `El archivo de Autorización supera el límite de 15 MB.` }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
      const bytes = await documentsPdf.arrayBuffer();
      attachments.push({
        filename: `Autorizacion_${documentsPdf.name}`,
        content: Buffer.from(bytes).toString('base64'),
      });
    }

    // Manejo de archivo 2: Orden Médica (medicalOrder)
    const medicalOrder = formData.get('medicalOrder') as File | null;
    if (medicalOrder && medicalOrder.size > 0) {
      if (medicalOrder.size > MAX_FILE_SIZE_BYTES) {
        return new Response(
          JSON.stringify({ message: `El archivo de Orden Médica supera el límite permitido.` }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
      const bytes = await medicalOrder.arrayBuffer();
      attachments.push({
        filename: `OrdenMedica_${medicalOrder.name}`,
        content: Buffer.from(bytes).toString('base64'),
      });
    }

    // Generar identificador único y asunto dinámico para el ticket de exámenes
    const ticketId = Math.floor(1000 + Math.random() * 9000);
    const subject = `Solicitud Cita Imageniología #${ticketId} - ${firstName} ${lastName}`;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Sistema de Cita de Imageniología <onboarding@gestion.emcosalud.com.co>', // Cambiar por dominio verificado en producción
        to: ['recepcion.clinica@emcosalud.com'], // Buzón receptor final para exámenes / imagenología
        cc: ['redes.sociales@emcosalud.com'], // Copia visible opcional
        reply_to: email,
        subject,
        headers: {
          'X-Entity-Ref-ID': `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        },
        html: `
          <h2>Nueva Solicitud de Cita Imageniología (#${ticketId})</h2>
          <hr />
          <h3>Datos del Paciente</h3>
          <p><strong>Nombres y Apellidos:</strong> ${firstName} ${lastName}</p>
          <p><strong>Tipo de Documento:</strong> ${documentType}</p>
          <p><strong>Número de Documento:</strong> ${documentNumber}</p>
          <br />
          <h3>Información de Contacto</h3>
          <p><strong>Correo electrónico:</strong> ${email}</p>
          <p><strong>Teléfono principal:</strong> ${phone}</p>
          <p><strong>Teléfono alternativo:</strong> ${phoneAlt}</p>
          <br />
          <p><em>Los documentos adjuntos (Autorización y Orden Médica) se encuentran integrados en este mensaje.</em></p>
        `,
        attachments,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      return new Response(
        JSON.stringify({ message: resendData.message || 'Error al procesar el envío de correo.' }),
        { status: resendResponse.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Solicitud de cita registrada exitosamente.', id: resendData.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ message: err.message || 'Error interno del servidor.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};