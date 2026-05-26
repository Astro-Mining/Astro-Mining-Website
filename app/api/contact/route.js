import { Resend } from "resend";

export async function POST(request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { firstName, lastName, email, phone, message } = await request.json();

    if (!firstName || !email || !message) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Astro Mining Contact Form <no-reply@astromining-industrial.com>",
      to: ["youssef.elroube123@gmail.com"],
      replyTo: email,
      subject: `New Inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="color:#cf5b12;margin-top:0">New Contact Form Inquiry</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#64748b;width:140px">Name</td>
              <td style="padding:8px 0;font-weight:600">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#64748b">Email</td>
              <td style="padding:8px 0"><a href="mailto:${email}" style="color:#cf5b12">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding:8px 0;color:#64748b">Phone</td>
              <td style="padding:8px 0">${phone}</td>
            </tr>` : ""}
          </table>
          <hr style="border:none;border-top:1px solid #e7ecf2;margin:16px 0" />
          <h3 style="color:#253446;margin-top:0">Project Details</h3>
          <p style="color:#253446;line-height:1.7;white-space:pre-wrap">${message}</p>
          <hr style="border:none;border-top:1px solid #e7ecf2;margin:16px 0" />
          <p style="color:#64748b;font-size:0.85rem;margin:0">
            Sent via astromining-industrial.com contact form
          </p>
        </div>
      `
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
