import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ArrowDown, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Clean Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(245,158,11,0.5)_50%,transparent_51%),linear-gradient(0deg,transparent_49%,rgba(245,158,11,0.5)_50%,transparent_51%)] bg-[length:60px_60px]" />
      </div>

      {/* Subtle Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Single Elegant Accent */}
      <motion.div 
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-accent-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div 
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ y, opacity }}
      >
        {/* Professional Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-primary-400 font-medium mb-4 tracking-wide">
            UI/UX Designer & Frontend Developer
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Pugazhenthi</span>
            <br />
            <span className="text-3xl md:text-5xl font-light text-neutral-400 mt-2 block">
              Crafting Digital Excellence
            </span>
          </h1>

          <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Creating intuitive, performant digital experiences through thoughtful design 
            and modern web technologies.
          </p>
        </motion.div>

        {/* Clean Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.a
            href="/PUGAZHENTHI-Resume.pdf"
            download
            className="btn-primary flex items-center gap-3"
            whileHover={{ 
              scale: 1.02, 
              y: -1,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
          
          <motion.a
            href="#projects"
            className="btn-secondary flex items-center gap-3"
            whileHover={{ 
              scale: 1.02, 
              y: -1,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Eye className="w-5 h-5" />
            View Portfolio
          </motion.a>
        </motion.div>

        {/* Professional Social Links */}
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { icon: Github, href: "https://github.com/pugazhenthiraman", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/pugazhenthiraman", label: "LinkedIn" },
            { icon: Mail, href: "mailto:pugazhenthiramval@gmail.com", label: "Email" }
          ].map(({ icon: Icon, href, label }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-neutral-800/50 hover:bg-neutral-700/50 transition-all duration-200"
              aria-label={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5 text-neutral-400 hover:text-primary-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Simple Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div 
            className="flex flex-col items-center gap-2 text-neutral-500"
            animate={{ y: [0, 5, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <span className="text-sm">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
