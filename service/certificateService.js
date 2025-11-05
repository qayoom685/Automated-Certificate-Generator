const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");

async function generateCertificate(name, programName) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([842, 595]);

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  page.drawText("Certificate of Completion", {
    x: 220,
    y: 450,
    size: 28,
    font: fontBold,
    color: rgb(0.2, 0.2, 0.2),
  });

  page.drawText(`This is to certify that`, {
    x: 280,
    y: 400,
    size: 16,
    font: fontRegular,
  });

  page.drawText(`${name}`, {
    x: 260,
    y: 360,
    size: 22,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.4),
  });

  page.drawText(`has successfully completed the ${programName}.`, {
    x: 180,
    y: 320,
    size: 16,
    font: fontRegular,
  });

  page.drawText(`Date: ${new Date().toLocaleDateString()}`, {
    x: 50,
    y: 80,
    size: 12,
    font: fontRegular,
  });

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}

module.exports = { generateCertificate };
