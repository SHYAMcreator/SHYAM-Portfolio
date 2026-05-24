const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-10">
          Contact Me
        </h2>

        <p className="text-gray-400 text-lg mb-12">
          Open to opportunities, internships, collaborations, and full stack development roles.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#0f172a] p-8 rounded-3xl border border-cyan-500/10">
            <h3 className="text-cyan-400 text-xl font-semibold mb-3">
              Email
            </h3>

            <p className="text-gray-400">
              karumurishyam01@gmail.com
            </p>
          </div>

          <div className="bg-[#0f172a] p-8 rounded-3xl border border-cyan-500/10">
            <h3 className="text-cyan-400 text-xl font-semibold mb-3">
              Phone
            </h3>

            <p className="text-gray-400">
              8499965286
            </p>
          </div>

          <div className="card-bg p-8 rounded-3xl border border-cyan-500/10 hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <h3 className="text-cyan-400 text-xl font-semibold mb-3">
              Location
            </h3>

            <p className="text-gray-400">
              East Godavari, Andhra Pradesh
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;