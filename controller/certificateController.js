const { generateCertificate } = require("../service/certificateService");
const { sendCertificateEmail } = require("../service/mailService");

const generateAndSendCertificate = async (req, res) => {
  try {
    const { name, email, programName } = req.body;

    if (!name || !email || !programName) {
      return res.status(400).json({ message: "Name, email, and programName are required." });
    }

    const pdfBuffer = await generateCertificate(name, programName);
    await sendCertificateEmail(email, name, pdfBuffer);

    res.status(200).json({
      message: "Certificate generated and emailed successfully 🎉",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { generateAndSendCertificate };
