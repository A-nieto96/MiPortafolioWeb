import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "PuertoApp — Sistema de Reservas",
      description: "Solución Web para propiedades horizontales que permite gestionar las reservas, desplegada en VPS con Docker y Nginx.",
      tags: ["Python", "Django", "PostgreSQL", "Docker", "Nginx", "VPS"],
      demo: "https://www.puertoapp.com/",
      featured: true,
    },
    {
      title: "Generador de Contraseñas Seguras",
      description: "Herramienta web para generar contraseñas seguras personalizadas con opciones de longitud, símbolos, números y mayúsculas. Diseñada para mejorar la seguridad de cuentas.",
      tags: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/A-nieto96/Password_generator.git",
      demo: "https://passwordgenerator-production-0240.up.railway.app/",
      featured: false,
    },
    {
      title: "Generador de Códigos QR",
      description: "Generador de códigos QR rápido y práctico para negocios o uso personal. Permite crear códigos escaneables para enlaces, textos o información de contacto.",
      tags: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/A-nieto96/Generador_QR.git",
      demo: "https://generadorqr-production.up.railway.app/",
      featured: false,
    },
  ];

  return (
    <section id="proyectos" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Proyectos</span>
          </h2>
          <div className="w-20 h-1 rounded-full mb-8" style={{ background: "var(--gradient-primary)" }} />

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group p-6 rounded-xl card-glass flex flex-col h-full"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Ver código en GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Ver demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-primary/80 px-2 py-1 rounded bg-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          {/* More Projects Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-muted-foreground mt-10"
          >
            ¿Quieres ver más? Visita mi{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              GitHub
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
