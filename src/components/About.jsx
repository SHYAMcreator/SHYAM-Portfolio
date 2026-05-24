const About = () => {
  return (
    <section id="about" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          About Me
        </h2>

        <div className="bg-[#0f172a] border border-cyan-500/10 rounded-3xl p-10">

          <p className="text-gray-400 leading-relaxed text-lg">
            Motivated and detail-oriented Python Full Stack Developer with
            foundational knowledge in Python, React.js, Django, Flask,
            REST APIs, MySQL, and Full Stack Web Development.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-6">
            Passionate about software development, cloud deployment,
            testing, debugging, AI-assisted development, and modern web
            technologies while continuously learning and improving technical skills.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                Education
              </h3>

              <p className="text-gray-300">
                B.Tech (ECE)
              </p>

              <p className="text-gray-400">
                Rajamahendri Institute of Engineering and Technology
              </p>

              <p className="text-gray-500">
                2021 - 2025
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                Certifications
              </h3>

              <ul className="space-y-2 text-gray-400">
                <li>IoT - Datapoint</li>
                <li>Cloud Computing - AWS Academy</li>
                <li>HTML, CSS, JavaScript - Infosys Springboard</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;