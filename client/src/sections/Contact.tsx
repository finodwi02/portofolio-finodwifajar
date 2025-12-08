import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  // State untuk menyimpan pesan error
  const [errors, setErrors] = useState<any>({});
  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Hilangkan error merah saat user mulai mengetik
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  // FUNGSI VALIDASI CUSTOM
  const validateForm = () => {
    let newErrors: any = {};
    let isValid = true;

    if (!formData.name) {
      newErrors.name = "Ups, Nama jangan dikosongin dong!";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email wajib diisi biar bisa dibalas";
      isValid = false;
    }
    if (!formData.subject) {
      newErrors.subject = "Judul pesannya apa nih? ";
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = "Jangan lupa tulis pesannya ya! ";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Cek Validasi Dulu
    if (!validateForm()) {
      return; // Stop jika ada error
    }

    setStatus("sending");

    try {
      // PENTING: Menggunakan jalur API Vercel Serverless
      const response = await axios.post("/api/contact", formData);

      if (response.status === 200) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        alert("Pesan berhasil terkirim!");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      alert("Gagal mengirim pesan.");
    }
  };

  return (
    <div
      id="contact"
      className="w-full min-h-screen p-4 py-20 bg-blue-50 dark:bg-slate-900 transition-colors duration-300 flex flex-col justify-center items-center"
    >
      <div className="max-w-[1240px] w-full m-auto">
        <div className="mb-10">
          <p className="text-xl tracking-widest uppercase text-blue-600 font-bold">
            Contact
          </p>
          <h2 className="py-4 text-4xl font-bold dark:text-white">
            Get In Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* KOLOM KIRI: INFO KONTAK */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 bg-white dark:bg-slate-800 dark:shadow-none"
          >
            <div className="lg:p-4 h-full">
              <div className="mb-8">
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300 w-full mb-4"
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Contact"
                />
                <h2 className="py-2 text-2xl font-bold dark:text-white">
                  Fino Dwi Fajar
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Frontend Developer
                </p>
                <p className="py-4 text-gray-600 dark:text-gray-300">
                  Saya terbuka untuk peluang kerjasama freelance atau full-time.
                  Hubungi saya dan mari berdiskusi.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                  <FaPhoneAlt className="text-blue-600" />{" "}
                  <span>+62 812 3456 7890</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                  <FaEnvelope className="text-blue-600" />{" "}
                  <span>fino@example.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                  <FaMapMarkerAlt className="text-blue-600" />{" "}
                  <span>Indonesia</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* KOLOM KANAN: FORMULIR INPUT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 bg-white dark:bg-slate-800 dark:shadow-none"
          >
            <div className="p-4">
              {/* Tambahkan noValidate agar bubble browser hilang */}
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 dark:text-gray-200">
                      Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      // Logika Class: Jika Error, border jadi Merah. Jika tidak, abu-abu.
                      className={`border-2 rounded-lg p-3 flex dark:bg-slate-700 dark:text-white outline-none ${
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-blue-500 dark:border-slate-600"
                      }`}
                      type="text"
                    />
                    {/* Tampilkan Pesan Error di Bawah Input */}
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 animate-pulse">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 dark:text-gray-200">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-slate-700 dark:border-slate-600 dark:text-white focus:border-blue-500 outline-none"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-gray-200">
                    Email
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`border-2 rounded-lg p-3 flex dark:bg-slate-700 dark:text-white outline-none ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-500 dark:border-slate-600"
                    }`}
                    type="email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 animate-pulse">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-gray-200">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`border-2 rounded-lg p-3 flex dark:bg-slate-700 dark:text-white outline-none ${
                      errors.subject
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-500 dark:border-slate-600"
                    }`}
                    type="text"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1 animate-pulse">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`border-2 rounded-lg p-3 dark:bg-slate-700 dark:text-white outline-none ${
                      errors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-500 dark:border-slate-600"
                    }`}
                    rows={6}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1 animate-pulse">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  className="w-full p-4 text-gray-100 mt-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold flex items-center justify-center gap-2 disabled:bg-gray-400"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <div className="w-full mt-20 border-t border-gray-300 dark:border-gray-700 pt-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex gap-6 text-2xl text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/finodwi02"
              target="_blank"
              className="hover:text-blue-600 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              className="hover:text-blue-600 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/finodfajar_/"
              target="_blank"
              className="hover:text-pink-600 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p className="mb-1">
              © {new Date().getFullYear()}{" "}
              <span className="font-bold text-blue-600">Fino Dwi Fajar</span>.
              All rights reserved.
            </p>
            <p className="text-xs">
              Designed & Built with{" "}
              <span className="font-semibold text-blue-500">React</span>,{" "}
              <span className="font-semibold text-cyan-500">Tailwind</span> &{" "}
              <span className="font-semibold text-green-500">Express</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
