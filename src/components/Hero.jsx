import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[120px]" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >

        <p className="text-cyan-400 uppercase tracking-[4px] mb-5">
          Python Full Stack Developer
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">

          SHYAM

          <span className="gradient-text">
            {" "}KARUMURI
          </span>

        </h1>

        <TypeAnimation
          sequence={[
            "React Developer",
            2000,
            "Python Developer",
            2000,
            "AI-Assisted Developer",
            2000,
            "Full Stack Engineer",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-3xl text-gray-300 font-semibold"
        />

        <p className="text-gray-400 text-lg md:text-xl mt-10 leading-relaxed max-w-3xl mx-auto">
          Motivated Python Full Stack Developer skilled in React.js,
          Django, Flask, REST APIs, MySQL, cloud deployment,
          testing, debugging, and AI-assisted development.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-12">

          <a
            href="#projects"
            className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition glow"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-2xl border border-cyan-400/30 hover:bg-cyan-400/10 transition"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            className="px-8 py-4 rounded-2xl border border-cyan-400/30 hover:bg-cyan-400/10 transition flex items-center gap-2"
          >
            <FaDownload />
            Resume
          </a>

        </div>

        <div className="flex justify-center gap-8 mt-12 text-3xl">

          <a
            href="https://github.com/SHYAMcreator"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 hover:scale-125 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 hover:scale-125 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </motion.div>
    </section>
  );
};

export default Hero;