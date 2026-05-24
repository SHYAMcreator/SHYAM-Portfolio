import {
  FaReact,
  FaPython,
  FaAws,
  FaDocker,
  FaGithub,
} from "react-icons/fa";

import { SiDjango, SiMysql } from "react-icons/si";

const FloatingIcons = () => {
  return (
    <>
      <FaReact className="absolute top-32 left-10 text-cyan-400 text-5xl animate-bounce opacity-30" />

      <FaPython className="absolute top-64 right-20 text-yellow-400 text-5xl animate-pulse opacity-30" />

      <SiDjango className="absolute bottom-40 left-20 text-green-400 text-5xl animate-bounce opacity-30" />

      <SiMysql className="absolute bottom-20 right-32 text-blue-400 text-5xl animate-pulse opacity-30" />

      <FaAws className="absolute top-1/2 left-1/3 text-orange-400 text-5xl animate-bounce opacity-20" />

      <FaDocker className="absolute top-1/3 right-1/3 text-cyan-300 text-5xl animate-pulse opacity-20" />

      <FaGithub className="absolute bottom-1/4 left-1/2 text-white text-5xl animate-bounce opacity-20" />
    </>
  );
};

export default FloatingIcons;