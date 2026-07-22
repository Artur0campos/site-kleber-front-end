"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

// SVG Icons for Contact Channels
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Simulate simple client-side delay for feedback
    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        error: null,
      });
      // Clear form on success
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
      });
    }, 1500);
  };

  return (
    <section id="contato" className={`${styles.contactSection} bg-texture-light`}>
      <div className={`container ${styles.grid}`}>
        {/* Left Column: Direct channels */}
        <div className={styles.leftCol}>
          <div>
            <span className="section-subtitle">Fale Conosco</span>
            <h2 className={styles.title}>Vamos conversar sobre seu caso.</h2>
          </div>
          <p className={styles.desc}>
            Preencha o formulário ou utilize um de nossos canais diretos.
          </p>

          <div className={styles.channelsList}>
            {/* Email */}
            <div className={styles.channelItem}>
              <div className={styles.iconBox}><MailIcon /></div>
              <div className={styles.channelInfo}>
                <span className={styles.channelLabel}>Email</span>
                <a href="mailto:kleber@kleberfreitasadvocacia.com.br" className={styles.channelValue}>
                  kleber@kleberfreitasadvocacia.com.br
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className={styles.channelItem}>
              <div className={styles.iconBox}><PhoneIcon /></div>
              <div className={styles.channelInfo}>
                <span className={styles.channelLabel}>Telefone / WhatsApp</span>
                <a href="https://wa.me/5575981300751" target="_blank" rel="noopener noreferrer" className={styles.channelValue}>
                  (75) 98130-0751
                </a>
              </div>
            </div>

             {/* Phone */}
            <div className={styles.channelItem}>
              <div className={styles.iconBox}><PhoneIcon /></div>
              <div className={styles.channelInfo}>
                <span className={styles.channelLabel}>Segundo Telefone / WhatsApp</span>
                <a href="https://wa.me/5575988368663" target="_blank" rel="noopener noreferrer" className={styles.channelValue}>
                  (75) 98836-8663
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className={styles.channelItem}>
              <div className={styles.iconBox}><BriefcaseIcon /></div>
              <div className={styles.channelInfo}>
                <span className={styles.channelLabel}>Horário</span>
                <span className={styles.channelValue}>
                  Seg — Sexta · 08:00h às 17:00h
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className={styles.formCard}>
          <form onSubmit={handleSubmit} className={styles.formGrid}>
            {/* Nome */}
            <div className={styles.formGroup}>
              <label htmlFor="nome" className={styles.label}>
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Como devemos te chamar"
                className={styles.input}
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Telefone */}
            <div className={styles.formGroup}>
              <label htmlFor="telefone" className={styles.label}>
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="(75) 99999-9999"
                className={styles.input}
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Assunto */}
            <div className={styles.formGroup}>
              <label htmlFor="assunto" className={styles.label}>
                Assunto
              </label>
              <input
                type="text"
                id="assunto"
                name="assunto"
                placeholder="Área ou tipo de demanda"
                className={styles.input}
                value={formData.assunto}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mensagem */}
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label htmlFor="mensagem" className={styles.label}>
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Descreva brevemente sua situação"
                className={styles.textarea}
                value={formData.mensagem}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className={styles.fullWidth}>
              <button
                type="submit"
                disabled={status.submitting}
                className={styles.submitBtn}
              >
                {status.submitting ? "Enviando..." : "Enviar mensagem →"}
              </button>

              {status.success && (
                <div className={`${styles.statusMessage} ${styles.success}`}>
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}

              {status.error && (
                <div className={`${styles.statusMessage} ${styles.error}`}>
                  {status.error}
                </div>
              )}
            </div>

            {/* Consent Text */}
            <p className={`${styles.consentText} ${styles.fullWidth}`}>
              Ao enviar, você concorda com nossa política de privacidade e
              tratamento de dados (LGPD).
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}