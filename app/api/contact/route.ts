import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

const rateLimitMap = new Map<string, number>();
const MAX_MESSAGE_LENGTH = 1200;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function getAllowedErrorMessage(message: string) {
  return message.replace(/\bSMTP_[A-Z_]+\b/g, "[redacted]");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const ip = request.headers.get("x-forwarded-for") || "local";
    const now = Date.now();
    const lastAttempt = rateLimitMap.get(ip) || 0;

    if (now - lastAttempt < 30000) {
      return Response.json(
        { error: "Please wait a moment before sending another message." },
        { status: 429 },
      );
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !subject || !message) {
      return Response.json({ error: "Please complete all fields before submitting." }, { status: 400 });
    }

    if (name.length > 100 || email.length > 150 || subject.length > 150 || message.length > MAX_MESSAGE_LENGTH) {
      return Response.json({ error: "One or more fields exceed the allowed length." }, { status: 400 });
    }

    if (message.length < 20) {
      return Response.json({ error: "Message must be at least 20 characters long." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || "0");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!host || !port || !user || !pass || !contactEmail) {
      return Response.json(
        {
          error:
            "Email delivery is not configured yet. Add SMTP environment variables before sending messages.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: String(process.env.SMTP_SECURE).toLowerCase() === "true",
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: user,
      to: contactEmail,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          <h2 style="margin: 0 0 12px;">New contact message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div>${message.replace(/\n/g, "<br />")}</div>
        </div>
      `,
    });

    rateLimitMap.set(ip, now);

    return Response.json({ success: true, message: "Message sent successfully." }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send email.";
    return Response.json(
      { error: getAllowedErrorMessage(message) },
      { status: 500 },
    );
  }
}
