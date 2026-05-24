import { GitHubCalendar } from "react-github-calendar";
const GithubStats = () => {
  return (
    <section
      id="github"
      className="py-28 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-16">
          GitHub Contributions
        </h2>

        <div className="bg-[#0f172a] border border-cyan-500/10 rounded-3xl p-8 overflow-x-auto">

          <GitHubCalendar
            username="SHYAMcreator"
            colorScheme="dark"
            fontSize={14}
          />

        </div>

      </div>
    </section>
  );
};

export default GithubStats;