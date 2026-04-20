import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Simple in-memory rate limiter: max 3 submissions per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return false;
  }
  if (entry.count >= 3) return true;
  entry.count++;
  return false;
}

// Escape HTML to prevent XSS in email body
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting by IP
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait before sending again." },
        { status: 429 },
      );
    }

    const body: ContactFormData = await request.json();

    // Validate presence
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Length limits
    if (body.name.length > 100) {
      return NextResponse.json({ error: "Name too long" }, { status: 400 });
    }
    if (body.email.length > 254) {
      return NextResponse.json({ error: "Email too long" }, { status: 400 });
    }
    if (body.message.length > 2000) {
      return NextResponse.json(
        { error: "Message too long (max 2000 chars)" },
        { status: 400 },
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 },
      );
    }

    // Sanitize all user input before putting in HTML
    const safeName = escapeHtml(body.name);
    const safeEmail = escapeHtml(body.email);
    const safeMessage = escapeHtml(body.message).replace(/\n/g, "<br>");

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: "Portfolio Contact <contact@sauravniraula.com.np>",
      to: "sauravniroula02@gmail.com",
      replyTo: body.email,
      subject: `New message from ${safeName} - Portfolio`,
      html: `
        <div style="font-family: monospace; max-width: 600px;">
          <h2 style="color: #3fb950;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 3px solid #3fb950; padding-left: 1rem; color: #555;">${safeMessage}</blockquote>
          <hr />
          <p style="color: #888; font-size: 0.8rem;">Sent from saurav.nr portfolio contact form</p>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message received! I'll get back to you soon.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
