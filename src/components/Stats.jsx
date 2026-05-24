const stats = [
  { number: "10+", label: "Projects" },
  { number: "15+", label: "Technologies" },
  { number: "2", label: "Internships" },
  { number: "100%", label: "Learning Mindset" },
];

const Stats = () => {
  return (
    <section className="py-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

        {stats.map((item, index) => (
          <div
            key={index}
            className="card-bg rounded-3xl p-10 text-center hover:shadow-cyan-500/20 hover:shadow-2xl transition"
          >
            <h2 className="text-5xl font-black gradient-text mb-4">
              {item.number}
            </h2>

            <p className="text-gray-400">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;