import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingIcons from "./components/FloatingIcons";
import ParticlesBg from "./components/ParticlesBg";
import ScrollProgress from "./components/ScrollProgress";
import Stats from "./components/Stats";
import GithubStats from "./components/GithubStats";

function App() {
  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">

      <ScrollProgress />
      <ParticlesBg />
      <FloatingIcons />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <GithubStats />
      <Experience />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;