import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "UI/UX Design",
    color: "neon-purple",
    skills: [
      { name: "Wireframing", level: 90 },
      { name: "Prototyping", level: 85 },
      { name: "User Research", level: 75 },
      { name: "Responsive Design", level: 85 },
    ],
  },
  {
    title: "Frontend Development",
    color: "neon-cyan",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 60 },
    ],
  },
  {
    title: "Design Tools",
    color: "neon-pink",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Photoshop", level: 80 },
      { name: "Illustrator", level: 70 },
      { name: "Canva", level: 85 },
    ],
  },
];

const colorMap: Record<string, string> = {
  "neon-purple": "from-neon-purple to-neon-pink",
  "neon-cyan": "from-neon-cyan to-neon-blue",
  "neon-pink": "from-neon-pink to-neon-purple",
};

const glowMap: Record<string, string> = {
  "neon-purple": "shadow-[0_0_15px_hsl(270,100%,65%,0.3)]",
  "neon-cyan": "shadow-[0_0_15px_hsl(180,100%,55%,0.3)]",
  "neon-pink": "shadow-[0_0_15px_hsl(330,100%,65%,0.3)]",
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-neon-text inline-block">Skills</h2>
          <p className="text-muted-foreground mt-2">What I bring to the table</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15 }}
              className={`glass-card rounded-2xl p-6 hover:${glowMap[cat.color]} transition-all duration-300`}
            >
              <h3 className="text-lg font-bold text-foreground mb-6">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: ci * 0.15 + si * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${colorMap[cat.color]}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
