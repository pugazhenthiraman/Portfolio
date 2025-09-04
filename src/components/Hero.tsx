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
      {/* Enhanced Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />
      
      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(245,158,11,0.8)_50%,transparent_51%),linear-gradient(0deg,transparent_49%,rgba(245,158,11,0.6)_50%,transparent_51%)] bg-[length:60px_60px]" />
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 
                ? 'rgba(245, 158, 11, 0.6)' 
                : 'rgba(192, 38, 211, 0.4)',
              boxShadow: `0 0 ${10 + Math.random() * 10}px currentColor`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Enhanced Accent Orbs */}
      <motion.div 
        className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, rgba(192, 38, 211, 0.08) 100%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.9, 0.6],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div 
        className="absolute bottom-20 left-20 w-64 h-64 rounded-full blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(192, 38, 211, 0.12) 0%, rgba(245, 158, 11, 0.06) 100%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
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
          <motion.p 
            className="text-primary-400 font-semibold mb-6 tracking-wide text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Frontend Developer
          </motion.p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <motion.span 
              className="text-white block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Pugazhenthi
            </motion.span>
            <motion.span 
              className="text-3xl md:text-5xl font-light text-neutral-400 mt-2 block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Building Modern Web Experiences
            </motion.span>
          </h1>

          <motion.p 
            className="text-xl text-neutral-300 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Crafting responsive, performant web applications with modern technologies. 
            Passionate about clean code, user experience, and cutting-edge development practices.
          </motion.p>
        </motion.div>

        {/* Enhanced Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.a
            href="/PUGAZHENTHI-Resume.pdf"
            download
            className="btn-primary flex items-center gap-3 relative overflow-hidden cursor-pointer"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 10px 25px rgba(245, 158, 11, 0.4)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              y: 0,
              boxShadow: "0 5px 15px rgba(245, 158, 11, 0.3)",
              transition: { duration: 0.1 }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.cursor = 'pointer';
            }}
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              whileTap={{ rotate: -5, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Download className="w-5 h-5 relative z-10" />
            </motion.div>
            <span className="relative z-10">Download Resume</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>
          
          <motion.a
            href="/PUGAZHENTHI-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-3 cursor-pointer"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              borderColor: "rgba(245, 158, 11, 0.4)",
              boxShadow: "0 8px 20px rgba(245, 158, 11, 0.2)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              y: 0,
              borderColor: "rgba(245, 158, 11, 0.6)",
              boxShadow: "0 4px 12px rgba(245, 158, 11, 0.3)",
              transition: { duration: 0.1 }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.cursor = 'pointer';
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Eye className="w-5 h-5" />
            </motion.div>
            View Resume
          </motion.a>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div 
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
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
              className="p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:bg-neutral-700/50 transition-all duration-200 group cursor-pointer"
              aria-label={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
              whileHover={{ 
                scale: 1.1, 
                y: -3,
                borderColor: "rgba(245, 158, 11, 0.3)",
                boxShadow: "0 8px 20px rgba(245, 158, 11, 0.15)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.9,
                y: -1,
                borderColor: "rgba(245, 158, 11, 0.5)",
                transition: { duration: 0.1 }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.cursor = 'pointer';
              }}
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                whileTap={{ rotate: -5, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="w-5 h-5 text-neutral-400 group-hover:text-primary-400 transition-colors duration-200" />
              </motion.div>
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
