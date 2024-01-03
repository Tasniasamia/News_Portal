import nodemailer from 'nodemailer';

export async function SendEmail(EmailTo, EmailText, EmailSubject) {
  let Transport = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false, // Set to true if SMTP server requires SSL/TLS
    auth: {
      user: "info@teamrabbil.com",
      pass: "~sR4[bhaC[Qs"
    },
    tls: {
      rejectUnauthorized: false
      // You might need to set other TLS options based on the server requirements
    }
  });

  let MailOption = {
    from: "Next JS News Portal <info@teamrabbil.com>",
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText
  };

  try {
    const result = await Transport.sendMail(MailOption);
    console.log("Email sent:", result);
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
