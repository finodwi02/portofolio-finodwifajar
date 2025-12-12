import React from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full h-screen text-center flex flex-col justify-center items-center overflow-hidden bg-gray-50 dark:bg-slate-900 relative px-4"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-[1240px] w-full mx-auto p-2 flex flex-col justify-center items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400 mb-4">
            LET'S BUILD SOMETHING LEGENDARY TOGETHER
          </p>

          <h1 className="py-4 text-gray-700 dark:text-gray-100 text-4xl sm:text-6xl font-bold">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Fino Dwi Fajar
            </span>
          </h1>

          <h1 className="py-2 text-gray-700 dark:text-gray-100 text-2xl sm:text-4xl font-bold">
            A{" "}
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                "UI/UX Enthusiast",
                2000,
                "Tech Explorer",
                2000,
                "Cybersecurity",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-blue-600 dark:text-blue-400"
              repeat={Infinity}
            />
          </h1>

          <p className="py-4 text-gray-600 dark:text-gray-400 max-w-[70%] mx-auto text-lg leading-relaxed">
            Saya seorang mahasiswa yang antusias mengeksplorasi ekosistem
            digital secara menyeluruh. Fokus saya mencakup perancangan antarmuka
            (UI/UX), pengembangan sistem Fullstack, serta memperkuat keamanannya
            melalui Cybersecurity.
          </p>

          {/* --- BAGIAN ICON SOSIAL MEDIA --- */}
          <div className="flex items-center justify-center gap-6 max-w-[330px] mx-auto py-4">
            <SocialIcon
              url="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"
              icon={<FaLinkedin />}
            />

            <SocialIcon
              url="https://github.com/finodwi02"
              icon={<FaGithub />}
            />

            <SocialIcon
              url="https://www.instagram.com/finodfajar_/"
              icon={<FaInstagram />}
            />
          </div>
          {/* -------------------------------- */}

          <div className="mt-8 flex gap-4 justify-center">
            {/* Tombol Lihat Proyek (Scroll ke bawah) */}
            <Link to="projects" smooth={true} duration={500}>
              <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg hover:shadow-blue-500/50">
                Lihat Proyek
              </button>
            </Link>

            {/* Tombol Download CV (Mengunduh File PDF) */}
            {/* Pastikan file cv.pdf ada di folder public */}
            <a
              href="/cv (1).pdf"
              download="CV_Fino_Dwi_Fajar.pdf"
              className="flex items-center"
            >
              <button className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 font-bold transition-all flex items-center gap-2 cursor-pointer">
                <FaDownload /> CV
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Komponen Helper SocialIcon
const SocialIcon = ({ icon, url }: { icon: React.ReactNode; url: string }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="group">
    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-none dark:bg-slate-800 p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-blue-600 hover:text-white hover:bg-blue-600 transition-colors">
      {icon}
    </div>
  </a>
);

export default Hero;
