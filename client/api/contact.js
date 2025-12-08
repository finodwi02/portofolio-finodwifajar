import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Hanya izinkan metode POST
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const { name, email, subject, message, phone } = req.body;

  // Konfigurasi Transporter (Sama seperti sebelumnya)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Ambil dari Vercel Environment
      pass: process.env.EMAIL_PASS, // Ambil dari Vercel Environment
    },
  });

  try {
    // Kirim Email
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // Kirim ke email Anda sendiri
      subject: `[PORTOFOLIO] Pesan dari: ${name}`,
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
    });

    return res.status(200).json({ message: "Berhasil terkirim!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Gagal mengirim email" });
  }
}
