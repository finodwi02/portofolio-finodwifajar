import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// DATA PROYEK (Bisa ditambah kapan saja di sini)
const projectData = [
  {
    id: 1,
    title: "Sistem Penilaian Lomba Poster",
    description:
      "Mengembangkan sistem penilaian menggunakan bahasa pemrograman Go, yang berfungsi untuk mengolah input nilai juri secara otomatis dan akurat.",
    tech: ["Golang"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl:
      "https://github.com/finodwi02/Hello-Project---103032430017-Fino-Dwi-Fajar",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Manajemen Kelas & Mahasiswa",
    description:
      "Membangun aplikasi pengelolaan data akademik menggunakan bahasa C++. Menerapkan struktur data Multi-linked List untuk menangani relasi kompleks antara data kelas dan mahasiswa.",
    tech: ["C++"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Aplikasi Ecopoin",
    description:
      "Merancang konsep dan antarmuka aplikasi yang bertujuan mengajak pengguna melakukan aktivitas ramah lingkungan menggunakan framework TailwindCSS dan library React.js serta melalui pendekatan gamifikasi.",
    tech: ["TailwindCSS", "React.js", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl: "#",
    demoUrl: "#",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full min-h-screen py-24 px-4 md:px-8 bg-white dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* JUDUL SECTION */}
        <div className="mb-12">
          <p className="text-xl tracking-widest uppercase text-blue-600 font-bold">
            Projects
          </p>
          <h2 className="py-4 text-4xl font-bold text-gray-800 dark:text-white">
            What I've Built
          </h2>
        </div>

        {/* GRID PROYEK */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// KOMPONEN KARTU (Dipisah agar rapi)
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }} // Muncul berurutan (delay)
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-between p-4 rounded-xl shadow-xl shadow-gray-400 bg-gray-50 dark:bg-slate-700 dark:shadow-none hover:scale-105 ease-in duration-300 group"
    >
      {/* GAMBAR THUMBNAIL */}
      <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={project.image}
          alt={project.title}
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="w-full">
        <h3 className="text-2xl font-bold text-gray-700 dark:text-white mb-2 text-center">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-center line-clamp-3">
          {project.description}
        </p>

        {/* TECH STACK TAGS */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {project.tech.map((item: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full dark:bg-slate-900 dark:text-blue-400"
            >
              {item}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 w-full">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          >
            <FaGithub /> Code
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <FaExternalLinkAlt /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
