const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Django", "Flask", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    title: "Tools",
    skills: ["GitHub", "VS Code", "Postman"],
  },
  {
    title: "Cloud",
    skills: ["AWS", "Vercel", "Netlify"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (
            <div
              key={index}
className="card-bg border border-cyan-500/10 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-300 hover:-translate-y-2"            >
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;