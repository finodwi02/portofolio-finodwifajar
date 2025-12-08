
import { motion } from "framer-motion";
// Mengimpor ikon-ikon teknologi
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,

} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiCplusplus,
  SiFigma,
} from "react-icons/si";

// DATA HARD SKILLS (Tech Stack)
const hardSkills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript/TS", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React + Vite", icon: <FaReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-800 dark:text-white" />,
  },
  { name: "C++ ", icon: <SiCplusplus className="text-blue-700" /> },
  { name: "UI/UX Design", icon: <SiFigma className="text-pink-500" /> },
];

// DATA SOFT SKILLS / DOMAIN KNOWLEDGE (ITSM, Math, dll)
const softSkills = [
  {
    title: "User-Centric",
    desc: "Selalu memprioritaskan pengalaman dan kenyamanan pengguna dalam desain.",
  },
  {
    title: "Problem Solver",
    desc: "Menemukan solusi efektif dan efisien untuk setiap tantangan teknis.",
  },
  {
    title: "Continuous Learner",
    desc: "Memiliki semangat tinggi untuk mengeksplorasi teknologi baru dan cepat beradaptasi dengan perubahan.",
  },
  {
    title: "Team Collaboration",
    desc: "Terbiasa bekerja sama, berdiskusi, dan memimpin dalam lingkungan organisasi maupun proyek tim.",
  },
];

// Konfigurasi Animasi Container (Agar muncul satu-satu)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Jeda 0.2 detik antar item
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full min-h-screen p-8 py-24 bg-blue-50 dark:bg-slate-900 transition-colors duration-300 flex items-center"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full w-full">
        <div className="mb-10">
          <p className="text-xl tracking-widest uppercase text-blue-600 font-bold">
            Skills
          </p>
          <h2 className="py-4 text-4xl font-bold dark:text-white">
            What I Can Do
          </h2>
        </div>

        {/* --- BAGIAN 1: HARD SKILLS (GRID LOGO) --- */}
        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-6">
          Tech Stack
        </h3>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {hardSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white dark:bg-slate-800 dark:shadow-none cursor-pointer flex flex-col items-center justify-center gap-4 group"
            >
              <div className="text-5xl group-hover:animate-bounce">
                {skill.icon}
              </div>
              <h3 className="font-bold text-gray-600 dark:text-gray-300">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* --- BAGIAN 2: SOFT SKILLS / DOMAIN (LIST CARD) --- */}
        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-6">
          Domain Knowledge & Soft Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softSkills.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500"
            >
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
