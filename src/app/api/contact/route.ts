import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate input
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email validation
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

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: "Portfolio Contact <contact@sauravniraula.com.np>",
      to: "sauravniroula01@gmail.com",
      replyTo: body.email,
      subject: `New message from ${body.name} — Portfolio`,
      html: `
        <div style="font-family: monospace; max-width: 600px;">
          <h2 style="color: #3fb950;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 3px solid #3fb950; padding-left: 1rem; color: #555;">${body.message.replace(/\n/g, "<br>")}</blockquote>
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
