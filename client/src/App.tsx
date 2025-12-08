
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact"; // <--- Import Contact Baru

function App() {
  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact /> {/* <--- Pasang Component Contact di sini */}
    </div>
  );
}

<div className="bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 overflow-x-hidden">
  {/* ... Navbar, Hero, dll ... */}
</div>;

export default App;
