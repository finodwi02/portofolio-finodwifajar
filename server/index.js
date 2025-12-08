require("dotenv").config(); // Load file .env
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer"); // Import Nodemailer

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Konfigurasi Pengirim Email (Transporter)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Ambil dari file .env
    pass: process.env.EMAIL_PASS, // Ambil dari file .env
  },
});

// Route Utama (Cek Server)
app.get("/", (req, res) => {
  res.send("Server Backend Fino Berjalan!");
});

// Route Kirim Pesan
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message, phone } = req.body;

  console.log("Pesan Baru Masuk:", req.body);

  // 1. Validasi Sederhana
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Data tidak lengkap" });
  }

  // 2. Format Email yang akan dikirim ke ANDA
  const mailOptions = {
    from: email, // Email Pengunjung
    to: process.env.EMAIL_USER, // Email Pribadi Anda (Penerima)
    subject: `[PORTOFOLIO] Pesan Baru dari: ${name}`,
    html: `
      <h3>Pesan Baru dari Website Portofolio</h3>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>No HP:</strong> ${phone || "Tidak diisi"}</p>
      <p><strong>Subjek:</strong> ${subject}</p>
      <hr/>
      <p><strong>Pesan:</strong></p>
      <p>${message}</p>
    `,
  };

  // 3. Kirim Email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Gagal kirim email:", error);
      return res.status(500).json({ error: "Gagal mengirim email" });
    } else {
      console.log("Email terkirim: " + info.response);
      return res.status(200).json({ message: "Berhasil terkirim!" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
