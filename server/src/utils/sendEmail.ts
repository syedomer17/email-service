import nodemailer from "nodemailer";

interface EmailOptions {
  to: string[];
  from: string;
  fromName: string;
  gmailOwner: string;
  gmailAppPassword: string;
  subject: string;
  html: string;
}

export async function sendEmail(options: EmailOptions) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: options.gmailOwner,
      pass: options.gmailAppPassword,
    },
  });

  const mailOptions = {
    from: `${options.fromName} <${options.from}>`,
    to: options.to,
    subject: options.subject,
    html: options.html,
  };

  const info = await transporter.sendMail(mailOptions);
  return { messageId: info.messageId, accepted: info.accepted };
}
