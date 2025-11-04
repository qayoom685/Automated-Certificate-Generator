require("dotenv").config();
const express = require("express");
const app = express();
const certificateRoutes = require("./routes/certificateRoutes");

app.use(express.json());
app.use("/api/certificates", certificateRoutes);

app.get("/", (req, res) => {
  res.send("Automated Certificate Generator API is running ✅");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
