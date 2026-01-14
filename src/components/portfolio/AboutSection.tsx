import { motion } from "framer-motion";
import { Code, Palette, Rocket } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Código Limpio",
      description: "Escribo código legible y mantenible siguiendo las mejores prácticas.",
    },
    {
      icon: Palette,
      title: "Diseño Moderno",
      description: "Creo interfaces atractivas y experiencias de usuario memorables.",
    },
    {
      icon: Rocket,
      title: "Aprendizaje Continuo",
      description: "Siempre explorando nuevas tecnologías y metodologías.",
    },
  ];

  return (
    <section id="sobre-mi" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Sobre Mí</span>
          </h2>
          <div className="w-20 h-1 rounded-full mb-8" style={{ background: "var(--gradient-primary)" }} />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Soy analista y desarrollador de software en constante aprendizaje, apasionado por 
                la tecnología y el diseño. Me encanta crear soluciones digitales 
                que combinen funcionalidad con estética.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Actualmente me enfoco en aprender <span className="text-primary font-medium">HTML</span>, 
                <span className="text-primary font-medium"> CSS</span> y 
                <span className="text-primary font-medium"> JavaScript</span>, 
                las bases fundamentales del desarrollo web moderno.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Mi objetivo es convertirme en un desarrollador full-stack capaz 
                de construir aplicaciones web completas y escalables.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="p-5 rounded-xl card-glass flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
