const experiences = [
  {
    title: "Embedded Hardware Junior Testing Engineer",
    company: "Aktivolt Celtek Pvt. Ltd",
    points: [
      "Performed testing, debugging, and validation of IoT and embedded modules.",
      "Worked with display units, BMS systems, telecom modules, and Gen-5 hardware.",
      "Analyzed functional issues and documented defects and test results.",
    ],
  },

  {
    title: "IoT Intern",
    company: "Datapoint",
    points: [
      "Implemented gesture detection using MPU6050 sensors and Arduino.",
      "Integrated motor drivers and IR sensors for automation systems.",
      "Improved calibration accuracy and debugging performance.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-28 px-6 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Internship Experience
        </h2>

        <div className="space-y-10">

          {experiences.map((exp, index) => (
            <div
              key={index}
className="card-bg border border-cyan-500/10 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-300 hover:-translate-y-2"            >
              <h3 className="text-2xl font-semibold text-cyan-400">
                {exp.title}
              </h3>

              <p className="text-gray-400 mt-2 mb-5">
                {exp.company}
              </p>

              <ul className="space-y-3 text-gray-400 list-disc list-inside">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;