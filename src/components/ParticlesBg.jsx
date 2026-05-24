import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBg = () => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: true,

        background: {
          color: {
            value: "#020617",
          },
        },

        particles: {
          number: {
            value: 80,
          },

          color: {
            value: "#22d3ee",
          },

          links: {
            enable: true,
            distance: 120,
            color: "#22d3ee",
            opacity: 0.3,
          },

          move: {
            enable: true,
            speed: 1.5,
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: 3,
          },
        },
      }}
      className="fixed inset-0 -z-10"
    />
  );
};

export default ParticlesBg;