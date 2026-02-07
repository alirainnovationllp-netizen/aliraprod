import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

interface ContactEmailData {
  name: string;
  email: string;
  company?: string | null;
  service?: string | null;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  const serviceLabels: Record<string, string> = {
    "agile-training": "Agile Training",
    "leadership": "Leadership Development",
    "digital-transformation": "Digital Transformation",
    "learning-products": "Learning Products",
    "other": "Other",
  };

  const serviceName = data.service ? (serviceLabels[data.service] || data.service) : "Not specified";

  const htmlBody = `
    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 8px;">
      <div style="background: #1a56db; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Contact Inquiry</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">AliraLabs Website</p>
      </div>
      <div style="background: #ffffff; padding: 28px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; width: 120px; vertical-align: top;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 500;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; vertical-align: top;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;"><a href="mailto:${data.email}" style="color: #1a56db; text-decoration: none;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; vertical-align: top;">Company</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">${data.company || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; vertical-align: top;">Service</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">${serviceName}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Message</td>
            <td style="padding: 12px 0; color: #111827; font-size: 14px; line-height: 1.6;">${data.message.replace(/\n/g, "<br/>")}</td>
          </tr>
        </table>
      </div>
      <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 20px;">This email was sent from the AliraLabs website contact form.</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"AliraLabs Website" <${process.env.GMAIL_USER}>`,
    to: "alirainnovationllp@gmail.com",
    replyTo: data.email,
    subject: `New Inquiry from ${data.name}${data.company ? ` (${data.company})` : ""} - ${serviceName}`,
    html: htmlBody,
  });
}
