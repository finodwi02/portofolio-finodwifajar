
import { motion } from "framer-motion";
import profileImg from "../assets/foto_portofolio.jpg"; // Pastikan path & nama file sesuai

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen flex items-center py-20 px-4 md:px-8 bg-white dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 w-full">
        {/* KOLOM KIRI (TEKS) - ANIMASI GESER DARI KIRI */}
        <div className="col-span-2">
          <motion.div
            // 1. Posisi Awal: Transparan & Geser ke Kiri Jauh (-100px)
            initial={{ opacity: 0, x: -100 }}
            // 2. Posisi Akhir: Muncul & Kembali ke Tengah (0px)
            whileInView={{ opacity: 1, x: 0 }}
            // 3. Durasi & Jenis Gerakan
            transition={{ duration: 1.0, ease: "easeOut" }}
            // 4. PENTING: Tunggu sampai 50% elemen masuk layar baru jalan
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="uppercase text-xl tracking-widest text-blue-600 font-bold mb-4">
              About Me
            </p>
            <h2 className="py-4 text-4xl font-bold text-gray-800 dark:text-white">
              Who I Am
            </h2>
            <p className="py-2 text-gray-600 dark:text-gray-300 text-lg">
              Saya menikmati seni merancang antarmuka digital sebagai{" "}
              <span className="font-bold text-blue-500"> UI/UX Enthusiast, </span>
              lalu menghidupkannya menjadi aplikasi nyata dengan
              kemampuan
              <span className="font-bold text-blue-500">
                {" "}
                Fullstack Development
              </span>{" "}
              Tidak berhenti di sana, saya kini menantang diri untuk mendalami
              <span className="font-bold text-blue-500"> Cybersecurity</span>.
            </p>
            <p className="py-2 text-gray-600 dark:text-gray-300 text-lg">
              Perjalanan saya dimulai dari rasa penasaran tentang bagaimana
              aplikasi bekerja di balik layar, hingga bagaimana menyajikannya
              User Interface terlihat bagus dan User Experience mudah digunakan.
            </p>
            <p className="py-4 text-gray-600 dark:text-gray-400 underline cursor-pointer hover:text-blue-600 transition-colors">
              Lihat proyek terbaru saya di bawah ini.
            </p>
          </motion.div>
        </div>

        {/* KOLOM KANAN (FOTO) - ANIMASI ZOOM IN */}
        <div className="w-full h-auto m-auto flex items-center justify-center p-4">
          <motion.div
            // Animasi Foto: Muncul membesar (Zoom In)
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.2 }} // Ada delay dikit biar muncul setelah teks
            viewport={{ once: true, amount: 0.5 }}
            className="shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 bg-gray-50 dark:bg-slate-700 dark:shadow-none p-2"
          >
            <img
              className="rounded-xl w-full object-cover h-full"
              src={profileImg}
              alt="Profile Fino"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
