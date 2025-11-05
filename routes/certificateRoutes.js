const express = require("express");
const router = express.Router();
const { generateAndSendCertificate } = require("../controller/certificateController");

router.post("/send", generateAndSendCertificate);

module.exports = router;
