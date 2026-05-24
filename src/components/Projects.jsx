import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "TaskFlow – Full Stack Task Manager",
    desc: "CRUD-based full stack web application with REST APIs and MySQL integration.",
    github: "https://github.com/SHYAMcreator",
  },

  {
    title: "SQL-Based Relational Database System",
    desc: "Designed normalized relational database with optimized queries and structured schema.",
    github: "https://github.com/SHYAMcreator",
  },

  {
    title: "Gesture-Based Wheelchair & Home Automation",
    desc: "IoT-based automation system using Arduino, MPU6050 sensors, and embedded control logic.",
    report: "/wheelchair-report.pdf",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
            >

              <div
                className="card-bg border border-cyan-500/10 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-300 hover:-translate-y-2 h-full flex flex-col justify-between"
              >

                <div>

                  <h3 className="text-2xl font-semibold mb-5 text-cyan-400">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {project.desc}
                  </p>

                </div>

                <div className="flex gap-4 mt-6 flex-wrap">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-3 rounded-xl border border-cyan-500/20 hover:bg-cyan-500/10 transition"
                    >
                      View Project
                    </a>
                  )}

                  {project.report && (
                    <a
                      href={project.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-3 rounded-xl border border-cyan-500/20 hover:bg-cyan-500/10 transition"
                    >
                      View Project
                    </a>
                  )}

                </div>

              </div>

            </Tilt>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;