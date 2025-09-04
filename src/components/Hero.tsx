import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, Box } from '@react-three/drei';
import { Download, Github, Linkedin, Mail, ArrowDown, Sparkles, Code, Monitor, Palette, Zap } from 'lucide-react';
import * as THREE from 'three';

// 3D Floating Elements Component
const FloatingElements: React.FC = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      sphereRef.current.rotation.y += 0.01;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      torusRef.current.rotation.y += 0.005;
    }
    if (boxRef.current) {
      boxRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.7) * 0.4;
      boxRef.current.rotation.y += 0.008;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#22c55e" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
      
      <Sphere ref={sphereRef} args={[0.6, 32, 32]} position={[-3, 2, 0]}>
        <meshStandardMaterial color="#22c55e" wireframe opacity={0.6} transparent />
      </Sphere>
      
      <Torus ref={torusRef} args={[1, 0.3, 16, 100]} position={[3, -1, 0]}>
        <meshStandardMaterial color="#4ade80" wireframe opacity={0.6} transparent />
      </Torus>
      
      <Box ref={boxRef} args={[0.8, 0.8, 0.8]} position={[0, 3, 0]}>
        <meshStandardMaterial color="#86efac" wireframe opacity={0.6} transparent />
      </Box>
    </>
  );
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  const socialLinks = [
    { icon: Github, href: "https://github.com/pugazhenthiraman", label: "GitHub", color: "hover:bg-gray-800" },
    { icon: Linkedin, href: "https://linkedin.com/in/pugazhenthiraman", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Mail, href: "mailto:pugazhenthiramval@gmail.com", label: "Email", color: "hover:bg-red-500" },
  ];

  const expertiseAreas = [
    { icon: Code, label: "Frontend Development", color: "from-primary-500 to-primary-600" },
    { icon: Monitor, label: "UI/UX Design", color: "from-accent-500 to-accent-600" },
    { icon: Palette, label: "Creative Solutions", color: "from-green-500 to-emerald-500" },
  ];

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <FloatingElements />
        </Canvas>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900 z-10" />
      <div className="absolute inset-0 bg-gradient-radial opacity-30 z-10" />
      
      {/* Content */}
      <motion.div
        style={{ y: springY, opacity: springOpacity, scale: springScale }}
        className="relative z-20 text-center container-max px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
      >
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 leading-tight"
          >
            <span className="gradient-text">Pugazhenthi</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-6 font-light tracking-wide"
          >
            Frontend Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-4"
          >
            Crafting exceptional digital experiences with modern web technologies. 
            Specialized in <span className="text-gradient font-medium">React</span>, <span className="text-gradient font-medium">Next.js</span>, and cutting-edge frontend development.
          </motion.p>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4"
        >
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 glass-effect rounded-2xl border border-primary-500/20 text-sm sm:text-base"
              >
                <div className={`w-8 h-8 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-primary-300 font-medium">{area.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary group"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
            <span>Download Resume</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="button-secondary group"
          >
            <span>View Projects</span>
            <ArrowDown className="w-5 h-5 ml-2 group-hover:animate-bounce-gentle" />
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center space-x-8 mb-16"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -8 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className={`w-14 h-14 glass-effect-strong rounded-2xl flex items-center justify-center text-white transition-all duration-300 ${social.color} backdrop-blur-sm hover:shadow-glow-lg`}
              >
                <Icon className="w-7 h-7" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
        >
          {[
            { number: "3+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-primary-400"
          >

          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
