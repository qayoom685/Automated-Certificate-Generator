const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendCertificateEmail(to, name, pdfBuffer) {
  const mailOptions = {
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to,
    subject: "Your Internship Completion Certificate 🎓",
    text: `Dear ${name},\n\nCongratulations on completing your internship! Please find your certificate attached.\n\nBest Regards,\nInternee.pk`,
    attachments: [
      {
        filename: "Certificate.pdf",
        content: pdfBuffer,
        contentType: "application/pdf",
      },
    ],
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { sendCertificateEmail };
