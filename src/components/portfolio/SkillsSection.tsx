import { motion } from "framer-motion";

const SkillsSection = () => {
  const skills = [
    { name: "HTML5", level: 75, color: "hsl(14, 79%, 54%)" },
    { name: "CSS3", level: 70, color: "hsl(207, 90%, 54%)" },
    { name: "JavaScript", level: 60, color: "hsl(50, 100%, 50%)" },
    { name: "React", level: 50, color: "hsl(193, 95%, 68%)" },
    { name: "Python", level: 80, color: "hsl(207, 94%, 33%)" },
    { name: "Django", level: 65, color: "hsl(128, 62%, 49%)" },
  ];

  const tools = [
    "VSCode", "GitHub", "Terminal", "Docker", "Git"
  ];

  return (
    <section id="habilidades" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Habilidades</span>
          </h2>
          <div className="w-20 h-1 rounded-full mb-8" style={{ background: "var(--gradient-primary)" }} />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills Progress */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Tecnologías</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Herramientas</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-lg card-glass text-sm font-medium text-foreground border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>

              {/* Learning Note */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 p-4 rounded-xl border border-primary/30 bg-primary/5"
              >
                <p className="text-sm text-muted-foreground">
                  💡 <span className="text-primary font-medium">Tip:</span> Los porcentajes reflejan 
                  mi nivel actual de confianza. Están en constante crecimiento a medida que practico 
                  y construyo proyectos.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
