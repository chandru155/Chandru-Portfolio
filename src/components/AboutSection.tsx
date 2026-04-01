import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const highlights = [
  { icon: "🎨", title: "UI/UX Design", desc: "Wireframing, Prototyping, User Research" },
  { icon: "💻", title: "Frontend Dev", desc: "HTML, CSS, JavaScript" },
  { icon: "🛠️", title: "Design Tools", desc: "Figma, Photoshop, Illustrator, Canva" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-neon-text inline-block">About Me</h2>
          <p className="text-muted-foreground mt-2">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl gradient-neon opacity-50 blur-sm" />
              <img
                src={profileImg}
                alt="Chandru C"
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-foreground leading-relaxed mb-8">
              UI/UX Designer with hands-on experience in creating user-centered designs,
              wireframes, and interactive prototypes using Figma. Skilled in Adobe Photoshop,
              Illustrator, and Canva for visual design. Basic knowledge of HTML, CSS, and
              JavaScript for frontend development. Passionate about improving user experience
              and building responsive, modern interfaces.
            </p>

            <div className="grid gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="glass-card rounded-xl p-4 flex items-start gap-4 hover:neon-glow-purple transition-all duration-300"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
