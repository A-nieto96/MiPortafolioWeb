import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm md:text-base mb-4"
          >
            Hola, mi nombre es
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="text-gradient">Adrian Nieto</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6"
          >
            Analista y Desarrollador de Software
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
          >
            Apasionado por crear experiencias web únicas y funcionales.
            Transformo ideas en código limpio y diseños atractivos.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4 mb-12"
          >
            {[
              { icon: Github, href: "https://github.com/A-nieto96", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/adrian-nieto-4897763a5", label: "LinkedIn" },
              { icon: Mail, href: "Mailto:adrianfnieto1996@hotmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl card-glass hover:border-primary/50 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-foreground" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#proyectos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-primary-foreground glow-box transition-all"
            style={{ background: "var(--gradient-primary)" }}
          >
            Ver mis proyectos
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
