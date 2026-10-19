"use client";

import { useState } from "react";
import "./style.css";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResultMessage(null);

    const formData = new FormData(e.currentTarget);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setResultMessage("Messaggio inviato con successo!");
        e.currentTarget.reset();
      } else {
        setIsSuccess(false);
        setResultMessage(data.message || "Si è verificato un errore.");
      }
    } catch (_error) {
      setIsSuccess(false);
      setResultMessage("Errore di connessione. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Contattaci</h2>
      <p className="subtitle">Compila il modulo per inviarci un messaggio.</p>

      <form onSubmit={handleSubmit} className="form">
        <input type="checkbox" name="botcheck" className="honeypot" />

        <div className="fieldGroup">
          <label htmlFor="name" className="label">
            Nome e Cognome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="input"
            placeholder="Mario Rossi"
          />
        </div>

        <div className="fieldGroup">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="input"
            placeholder="mario@esempio.it"
          />
        </div>

        <div className="fieldGroup">
          <label htmlFor="message" className="label">
            Messaggio
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="textarea"
            placeholder="Scrivi qui il tuo messaggio..."
          />
        </div>

        <div className="checkboxGroup">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            required
            className="checkbox"
          />
          <label htmlFor="privacy" className="privacyLabel">
            <a
              href="/privacy-policy"
              className="privacyLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            .
          </label>
        </div>

        <button type="submit" disabled={isSubmitting} className="submitButton">
          {isSubmitting ? "Invio in corso..." : "Invia messaggio"}
        </button>

        {resultMessage && (
          <div
            className={`${alert} ${isSuccess ? "alertSuccess" : "alertError"}`}
          >
            {resultMessage}
          </div>
        )}
      </form>
    </div>
  );
}
