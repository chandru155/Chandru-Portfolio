import { motion } from "framer-motion";

const projects = [
  {
    title: "Dashboard UI",
    description: "Modern admin dashboard with KPI cards and transaction table. Clean UI/UX principles with spacing, typography, and color consistency.",
    tech: ["HTML", "CSS"],
    live: "https://chandru155.github.io/Dashboard/",
    github: "https://github.com/chandru155/Dashboard",
  },
  {
    title: "To-Do List App",
    description: "Task management app with add, delete, and mark-as-complete functionality. Dynamic DOM manipulation with a clean, user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://chandru155.github.io/Todo-List/",
    github: "https://github.com/chandru155/Todo-List",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-neon-text inline-block">Projects</h2>
          <p className="text-muted-foreground mt-2">Things I've built</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl p-6 group hover:shadow-[0_0_30px_hsl(270,100%,65%,0.2)] transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:gradient-neon-text transition-all">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border border-neon-cyan/30 text-neon-cyan bg-neon-cyan/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon text-sm px-4 py-2"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-outline text-sm px-4 py-2"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
