"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong while sending the message.");
      }

      setStatus("success");
      setFeedback("Message sent successfully. I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending the message. Please try again.",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block space-y-2 text-sm text-slate-300">
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength={100}
            className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50"
          />
        </label>

        <label className="block space-y-2 text-sm text-slate-300">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={150}
            className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50"
          />
        </label>
      </div>

      <label className="block space-y-2 text-sm text-slate-300">
        <span>Subject</span>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          maxLength={150}
          className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50"
        />
      </label>

      <label className="block space-y-2 text-sm text-slate-300">
        <span>Message</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          minLength={20}
          maxLength={1200}
          rows={6}
          className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>

      {feedback ? (
        <div
          className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm ${
            status === "success"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
              : "border-red-500/30 bg-red-500/10 text-red-200"
          }`}
        >
          {status === "success" ? <CheckCircle2 className="h-4 w-4" /> : null}
          {feedback}
        </div>
      ) : null}
    </form>
  );
}
