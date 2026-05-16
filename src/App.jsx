import { motion } from 'framer-motion'

const skills = {
  'Programming Languages': ['Python', 'JavaScript', 'HTML5', 'CSS3'],
  'Frontend Development': ['React.js', 'Bootstrap', 'Responsive Web Design', 'DOM Manipulation', 'REST API Integration', 'UI Development'],
  'Backend Development': ['Django', 'Flask', 'FastAPI', 'RESTful APIs', 'API Development', 'Authentication & Authorization', 'MVC Architecture', 'Server-Side Development'],
  'Database & Storage': ['MySQL', 'PostgreSQL', 'SQLite', 'Database Design', 'CRUD Operations', 'Query Optimization'],
  'Full Stack & Web Technologies': ['Full Stack Development', 'Web Application Development', 'Client-Server Architecture', 'JSON', 'AJAX', 'Microservices Basics'],
  'Testing & Debugging': ['Manual Testing', 'Functional Testing', 'Regression Testing', 'Smoke Testing', 'Sanity Testing', 'API Testing', 'Test Case Design', 'Debugging & Troubleshooting', 'Defect Tracking', 'Bug Reporting'],
  'Tools & Platforms': ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker Basics', 'Linux Basics', 'Jupyter Notebook'],
  'Cloud & Deployment': ['AWS Basics', 'Vercel', 'Netlify', 'Render', 'CI/CD', 'Application Deployment'],
  'Software Engineering Concepts': ['OOP', 'DSA', 'SDLC', 'Agile Methodology', 'Version Control'],
  'AI & Productivity Tools': ['ChatGPT', 'Claude AI', 'GitHub Copilot', 'Prompt Engineering', 'AI-Assisted Development'],
}

const projects = [
  {
    title: 'TaskFlow – Full Stack Task Manager',
    points: [
      'Built a complete CRUD-based web application to understand full-stack architecture.',
      'Designed REST APIs in Node.js with routing, validation, and structured backend logic.',
      'Integrated MySQL for efficient data handling and dynamic updates.',
      'Debugged API failures and frontend-backend communication issues to ensure smooth functionality.',
      'Strengthened clean coding, modular design, and end-to-end problem solving.',
    ],
  },
  {
    title: 'Gesture-Based Wheelchair & Home Automation System',
    points: [
      'Implemented gesture detection using the MPU6050 sensor and programmed control logic with Arduino.',
      'Integrated motor drivers and IR sensors to automate movement and appliance switching.',
      'Debugged calibration issues, unstable values, and timing delays to improve accuracy.',
      'Gained strong analytical and real-time system troubleshooting experience.',
    ],
  },
  {
    title: 'SQL-Based Relational Database System',
    points: [
      'Designed a normalized relational database in MySQL using ER modeling.',
      'Built structured tables with constraints to ensure data accuracy and consistency.',
      'Used JOIN, GROUP BY, and subqueries to solve data retrieval problems.',
      'Improved query performance by reducing redundancy through normalization.',
    ],
  },
]

const internships = [
  {
    role: 'Embedded Hardware Junior Testing Engineer',
    company: 'Aktivolt Celtek Pvt. Ltd',
    points: [
      'Performed testing, debugging, and validation of IoT and embedded modules.',
      'Worked with display units, BMS systems, telecom modules, and Gen-5 hardware.',
      'Analyzed functional issues and prepared documentation of defects and test results.',
    ],
  },
  {
    role: 'IoT Intern',
    company: 'Datapoint',
    points: [
      'Worked with microcontrollers and sensors to build small IoT-based systems.',
      'Gained experience in circuit design, sensor calibration, and hardware debugging.',
      'Implemented real-time applications like traffic signal systems and motor controls.',
    ],
  },
]

const navItems = ['about', 'skills', 'projects', 'internship', 'certifications', 'education', 'contact']

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <h1 className="text-lg font-semibold tracking-wide text-brand">SHYAM KARUMURI</h1>
          <ul className="hidden gap-4 text-sm md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="capitalize text-slate-300 transition hover:text-brand">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 pt-24">
        <section id="hero" className="glass mb-8 rounded-2xl p-8 text-center">
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold md:text-5xl">SHYAM KARUMURI</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-xl text-brand">Python Full Stack Developer</motion.p>
          <p className="mx-auto mt-5 max-w-3xl text-slate-300">Motivated and detail-oriented Python Full Stack Developer with foundational knowledge in Python, React.js, Django, Flask, REST APIs, MySQL, and Full Stack Web Development. Eager to apply problem-solving, software development, cloud deployment, testing, and AI-assisted development skills in a growth-oriented organization while continuously learning modern technologies.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="/shyam-karumuri-resume.txt" download className="rounded-lg bg-brand px-5 py-2 font-medium text-slate-950 transition hover:bg-sky-300">Download Resume</a>
            <button className="rounded-lg border border-slate-600 px-5 py-2 text-slate-300">GitHub (Not Provided)</button>
            <button className="rounded-lg border border-slate-600 px-5 py-2 text-slate-300">LinkedIn (Not Provided)</button>
          </div>
        </section>

        <section id="about" className="glass mb-8 rounded-2xl p-6"><h3 className="mb-3 text-2xl font-semibold">About</h3><p className="text-slate-300">Focused on full stack development fundamentals, API development, database design, testing, debugging, and AI-assisted productivity with continuous learning mindset.</p></section>

        <section id="skills" className="mb-8"><h3 className="mb-4 text-2xl font-semibold">Skills</h3><div className="grid gap-4 md:grid-cols-2">{Object.entries(skills).map(([title, items], i) => (<motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} key={title} className="glass rounded-xl p-4"><h4 className="mb-2 font-semibold text-brand">{title}</h4><div className="flex flex-wrap gap-2">{items.map((s) => <span key={s} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200">{s}</span>)}</div></motion.article>))}</div></section>

        <section id="projects" className="mb-8"><h3 className="mb-4 text-2xl font-semibold">Projects</h3><div className="grid gap-4 md:grid-cols-2">{projects.map((project) => (<article key={project.title} className="glass group rounded-xl p-5 transition hover:-translate-y-1 hover:border-brand/50"><h4 className="mb-3 text-lg font-semibold text-brand">{project.title}</h4><ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">{project.points.map((p) => <li key={p}>{p}</li>)}</ul></article>))}</div></section>

        <section id="internship" className="mb-8"><h3 className="mb-4 text-2xl font-semibold">Internship Experience</h3><div className="space-y-4">{internships.map((item) => (<article key={item.role} className="glass rounded-xl p-5"><h4 className="text-lg font-semibold">{item.role}</h4><p className="mb-3 text-brand">{item.company}</p><ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">{item.points.map((p) => <li key={p}>{p}</li>)}</ul></article>))}</div></section>

        <section id="certifications" className="glass mb-8 rounded-2xl p-6"><h3 className="mb-3 text-2xl font-semibold">Certifications</h3><ul className="list-disc space-y-1 pl-5 text-slate-300"><li>IoT – Datapoint</li><li>Cloud Computing – AWS Academy</li><li>HTML, CSS, JavaScript – Infosys Springboard</li></ul></section>

        <section id="education" className="glass mb-8 rounded-2xl p-6"><h3 className="mb-3 text-2xl font-semibold">Education</h3><p className="font-semibold">B.TECH (ECE)</p><p className="text-slate-300">Rajamahendri Institute of Engineering and Technology</p><p className="text-slate-400">2021 - 2025</p></section>

        <section id="contact" className="glass mb-8 rounded-2xl p-6"><h3 className="mb-3 text-2xl font-semibold">Contact</h3><p className="text-slate-300">Phone: <a href="tel:+918499965286" className="text-brand">+91 8499965286</a></p><p className="text-slate-300">Email: <a href="mailto:karumurishyam01@gmail.com" className="text-brand">karumurishyam01@gmail.com</a></p><p className="text-slate-300">Location: East Godavari District, Korukonda</p></section>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-slate-400">© SHYAM KARUMURI · Python Full Stack Developer · East Godavari District, Korukonda</footer>
    </div>
  )
}
