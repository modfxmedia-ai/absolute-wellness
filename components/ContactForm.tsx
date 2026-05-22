"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const BRAND = "#7E9146";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  insurance: string;
  message: string;
  consent: boolean;
};

const initial: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  insurance: "",
  message: "",
  consent: false,
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  title = "Request an Appointment",
  subtitle = "We'll get back to you shortly — same-week appointments available.",
  submitLabel = "Submit",
}: {
  title?: string;
  subtitle?: string;
  submitLabel?: string;
}) {
  const reduce = useReducedMotion();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^[0-9+()\-.\s]{7,}$/.test(form.phone.trim())) e.phone = "Enter a valid phone";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email";
    if (!form.consent) e.consent = "Please accept to continue";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      // TODO: wire to backend / CRM endpoint (e.g. LeadConnector hook).
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-2 rounded-[28px] opacity-25 blur-2xl"
        style={{ background: `linear-gradient(135deg, ${BRAND} 0%, transparent 70%)` }}
      />
      <div className="relative overflow-hidden rounded-[24px] bg-white p-8 shadow-xl ring-1 ring-black/5 sm:p-10">
        <div className="mb-7">
          <h3 className="font-[family-name:var(--font-raleway)] text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600">{subtitle}</p>
        </div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl border border-[#7E9146]/30 bg-[#f7f9f2] p-8 text-center"
            >
              <span
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: BRAND }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 5 5L20 7" />
                </svg>
              </span>
              <h4 className="mt-4 font-[family-name:var(--font-raleway)] text-xl font-bold text-gray-900">
                Thank you!
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                We received your request and will reach out shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold underline-offset-4 hover:underline"
                style={{ color: BRAND }}
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={onSubmit}
              noValidate
              className="space-y-5"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label="First Name"
                  id="firstName"
                  value={form.firstName}
                  onChange={(v) => update("firstName", v)}
                  placeholder="First Name"
                  autoComplete="given-name"
                />
                <Field
                  label="Last Name"
                  id="lastName"
                  value={form.lastName}
                  onChange={(v) => update("lastName", v)}
                  placeholder="Last Name"
                  autoComplete="family-name"
                />
              </div>

              <Field
                label="Phone"
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={(v) => update("phone", v)}
                placeholder="Phone"
                autoComplete="tel"
                error={errors.phone}
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a14.7 14.7 0 0 1-6.586-6.586l1.293-.97a1.125 1.125 0 0 0 .417-1.173L8.35 4.852A1.125 1.125 0 0 0 7.26 4H5.886A2.25 2.25 0 0 0 3.636 6.25v.5Z" />
                  </svg>
                }
              />

              <Field
                label="Email"
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(v) => update("email", v)}
                placeholder="Email"
                autoComplete="email"
                error={errors.email}
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                }
              />

              <Field
                label="Insurance Provider"
                id="insurance"
                value={form.insurance}
                onChange={(v) => update("insurance", v)}
              />

              <TextArea
                label="Message"
                id="message"
                value={form.message}
                onChange={(v) => update("message", v)}
              />

              <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-[#f7f9f2] p-4 ring-1 ring-[#7E9146]/10 transition-colors hover:bg-[#f0f4e8]">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                  className="mt-1 h-4 w-4 flex-shrink-0 rounded border-gray-300 accent-[#7E9146] focus:ring-[#7E9146]"
                />
                <span className="text-xs leading-relaxed text-gray-600">
                  Absolute Wellness Center is committed to protecting and respecting your privacy,
                  and we&apos;ll only use your personal information to administer your account and
                  to provide the products and services you requested from us.
                  <br />
                  I consent to receive SMS notifications, alerts &amp; occasional marketing
                  communication from Absolute Wellness Center. Message frequency varies. Message
                  &amp; data rates may apply. Text HELP to (541) 484-5777 for assistance. You can
                  reply STOP to unsubscribe at any time.
                </span>
              </label>
              {errors.consent && (
                <p className="-mt-3 text-xs font-semibold text-red-600">{errors.consent}</p>
              )}

              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-8 py-4 font-[family-name:var(--font-raleway)] text-base font-bold text-white shadow-lg transition-all hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                style={{
                  backgroundColor: BRAND,
                  boxShadow: "0 14px 32px -12px rgba(126,145,70,0.6)",
                }}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                {status === "submitting" ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    {submitLabel}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
                    </svg>
                  </>
                )}
              </motion.button>

              {status === "error" && (
                <p className="text-center text-sm font-semibold text-red-600">
                  Something went wrong. Please call (541) 484-5777.
                </p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  autoComplete,
  error,
  icon,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-[family-name:var(--font-raleway)] text-sm font-bold text-gray-900"
      >
        {label} {required && <span style={{ color: BRAND }}>*</span>}
      </label>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all focus:ring-2 ${
            icon ? "pl-10" : ""
          } ${
            error
              ? "border-red-300 focus:border-red-400 focus:ring-red-100"
              : "border-gray-200 focus:border-[#7E9146] focus:ring-[#7E9146]/20"
          }`}
        />
      </div>
      {error && <p className="mt-1.5 text-xs font-semibold text-red-600">{error}</p>}
    </div>
  );
}

function TextArea({
  label,
  id,
  value,
  onChange,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-[family-name:var(--font-raleway)] text-sm font-bold text-gray-900"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        rows={4}
        onChange={(e) => onChange(e.target.value)}
        className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all focus:border-[#7E9146] focus:ring-2 focus:ring-[#7E9146]/20"
      />
    </div>
  );
}
