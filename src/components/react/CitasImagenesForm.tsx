import { useState, type FormEvent } from 'react';
import { citasDocumentTypes } from '@/data/examenes-preparacion';

type FormState = {
  firstName: string;
  lastName: string;
  documentType: string;
  documentNumber: string;
  email: string;
  phone: string;
  phoneAlt: string;
  acceptsPrivacy: boolean;
  documentsPdf: File | null;
  medicalOrder: File | null;
};

const initialState: FormState = {
  firstName: '',
  lastName: '',
  documentType: '',
  documentNumber: '',
  email: '',
  phone: '',
  phoneAlt: '',
  acceptsPrivacy: false,
  documentsPdf: null,
  medicalOrder: null,
};

const fieldClass =
  'w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15';

const labelClass = 'mb-1.5 block text-sm font-semibold text-brand-blue';

export default function ExamenesForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const update = (field: keyof FormState, value: string | boolean | File | null) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (value !== null && !(value instanceof File)) {
        formData.append(key, String(value));
      }
    });

    if (form.documentsPdf) formData.append('documentsPdf', form.documentsPdf);
    if (form.medicalOrder) formData.append('medicalOrder', form.medicalOrder);

    try {
      const response = await fetch('/api/citas/imagenes', {
        method: 'POST',
        body: formData,
      });

      const resData = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(resData.message || 'Error en la solicitud. Intente nuevamente.');
      }

      setSubmitted(true);
      setForm(initialState);
    } catch (err: any) {
      console.error('Error al enviar formulario de exámenes:', err);
      setErrorMsg(err.message || 'Ocurrió un error inesperado al procesar la solicitud.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="space-y-4 rounded-xl border border-brand-green/30 bg-brand-green/5 p-5 text-center">
        <h2 className="m-0 text-xl font-bold text-brand-green-dark">Solicitud enviada</h2>
        <p className="m-0 text-slate-700">
          Su solicitud de exámenes ha sido registrada con éxito. Revise el correo electrónico indicado para
          recibir las indicaciones y confirmación.
        </p>
        <button
          type="button"
          className="btn btn--primary mx-auto"
          onClick={() => setSubmitted(false)}
        >
          Cerrar
        </button>
      </div>
    );
  }

  return (
    <form className="relative space-y-5" onSubmit={handleSubmit}>
      {/* Modal / Toast emergente de error visualmente accesible */}
      {errorMsg && (
        <div className="sticky top-4 z-50 flex items-start justify-between gap-3 rounded-xl border border-red-300 bg-red-50 p-4 shadow-lg text-sm text-red-700">
          <div>
            <p className="font-bold m-0">No se pudo enviar la solicitud</p>
            <p className="m-0 text-xs text-red-600 mt-1">{errorMsg}</p>
          </div>
          <button
            type="button"
            className="text-red-500 hover:text-red-800 font-bold text-base leading-none"
            onClick={() => setErrorMsg(null)}
          >
            ✕
          </button>
        </div>
      )}

      {/* Estructura de Dos Columnas responsiva estilo CF7 */}
      <div className="grid gap-5 md:grid-cols-1">
        {/* Columna Izquierda */}
        <div className="space-y-4">
          <div>
            <label className={labelClass} htmlFor="exam-firstName">
              Nombres *
            </label>
            <input
              id="exam-firstName"
              className={fieldClass}
              type="text"
              required
              placeholder="Ingrese sus nombres"
              autoComplete="given-name"
              value={form.firstName}
              onChange={(event) => update('firstName', event.target.value)}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="exam-lastName">
              Apellidos *
            </label>
            <input
              id="exam-lastName"
              className={fieldClass}
              type="text"
              required
              placeholder="Ingrese sus apellidos"
              autoComplete="family-name"
              value={form.lastName}
              onChange={(event) => update('lastName', event.target.value)}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="exam-documentType">
              Tipo de documento *
            </label>
            <select
              id="exam-documentType"
              className={fieldClass}
              required
              value={form.documentType}
              onChange={(event) => update('documentType', event.target.value)}
            >
              <option value="">— Elija una opción —</option>
              {citasDocumentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="exam-documentNumber">
              Número de documento *
            </label>
            <input
              id="exam-documentNumber"
              className={fieldClass}
              type="text"
              required
              placeholder="Ej: 1234567890"
              value={form.documentNumber}
              onChange={(event) => update('documentNumber', event.target.value)}
            />
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="space-y-4">
          <div>
            <label className={labelClass} htmlFor="exam-email">
              Correo electrónico *
            </label>
            <input
              id="exam-email"
              className={fieldClass}
              type="email"
              required
              placeholder="ejemplo@correo.com"
              autoComplete="email"
              value={form.email}
              onChange={(event) => update('email', event.target.value)}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="exam-phone">
              Teléfono *
            </label>
            <input
              id="exam-phone"
              className={fieldClass}
              type="tel"
              required
              placeholder="Ej: 3001234567"
              autoComplete="tel"
              value={form.phone}
              onChange={(event) => update('phone', event.target.value)}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="exam-phoneAlt">
              2Teléfono
            </label>
            <input
              id="exam-phoneAlt"
              className={fieldClass}
              type="tel"
              placeholder="Ej: 3209876543"
              autoComplete="tel"
              value={form.phoneAlt}
              onChange={(event) => update('phoneAlt', event.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Sección de Carga de Archivos */}
      <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-4">
        <p className="m-0 text-xs font-bold uppercase tracking-wide text-brand-blue">
          Subir Archivos necesarios
        </p>

        <div>
          <label className={labelClass} htmlFor="exam-documentsPdf">
            Autorización *
          </label>
          <input
            id="exam-documentsPdf"
            className="block w-full text-xs text-slate-700 file:mr-3 file:rounded-lg file:border-0 file:bg-brand-blue file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-brand-blue-light"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/*"
            required
            onChange={(event) => update('documentsPdf', event.target.files?.[0] ?? null)}
          />
          <p className="mt-1 text-[11px] text-slate-500">Formatos permitidos: PDF, JPG, PNG (Máx. 15MB)</p>
        </div>

        <div>
          <label className={labelClass} htmlFor="exam-medicalOrder">
            Orden Médica *
          </label>
          <input
            id="exam-medicalOrder"
            className="block w-full text-xs text-slate-700 file:mr-3 file:rounded-lg file:border-0 file:bg-brand-blue file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-brand-blue-light"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/*"
            required
            onChange={(event) => update('medicalOrder', event.target.files?.[0] ?? null)}
          />
          <p className="mt-1 text-[11px] text-slate-500">Formatos permitidos: PDF, JPG, PNG (Máx. 5MB)</p>
        </div>
      </div>

      {/* Autorización de Privacidad */}
      <label className="flex items-start gap-3 text-sm text-slate-700 pt-1">
        <input
          className="mt-1 h-4 w-4 accent-brand-green"
          type="checkbox"
          required
          checked={form.acceptsPrivacy}
          onChange={(event) => update('acceptsPrivacy', event.target.checked)}
        />
        <span>
          Autorizo{' '}
          <a href="/politica-privacidad" className="font-semibold text-brand-blue hover:underline">
            el tratamiento de datos
          </a>
          .
        </span>
      </label>

      {/* Botón de Envío */}
      <button
        type="submit"
        className="btn btn--primary w-full disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando Solicitud...' : 'Enviar Solicitud'}
      </button>
    </form>
  );
}