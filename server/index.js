const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Wajib: Agar React (Port 5173) boleh kirim data ke sini
app.use(bodyParser.json());

// ROUTE UTAMA
app.get("/", (req, res) => {
  res.send("Server Backend Berjalan Lancar! 🚀");
});

// ROUTE CONTACT (Menerima Data dari React)
app.post("/api/contact", (req, res) => {
  const { name, phone, email, subject, message } = req.body;

    console.log("-----------------------------------");
    console.log("📨 PESAN BARU DITERIMA:");
    console.log("Nama    :", name);
    console.log("No HP   :", phone);
    console.log("Email   :", email);
    console.log("Subjek  :", subject);
    console.log("Pesan   :", message);
    console.log("-----------------------------------");

  // Kirim balasan sukses ke React
  res
    .status(200)
    .json({ success: true, message: "Pesan berhasil diterima server!" });
});

// Jalankan Server
app.listen(PORT, () => {
  console.log(`Server Backend berjalan di http://localhost:${PORT}`);
});
