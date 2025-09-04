import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Zap, Layers, Rocket, Palette, Code } from 'lucide-react';

interface SectionIndicatorProps {
  currentSection: string;
}

const SectionIndicator: React.FC<SectionIndicatorProps> = ({ currentSection }) => {
  const sections = [
    { id: 'home', icon: Sparkles, label: 'Home' },
    { id: 'about', icon: Target, label: 'About' },
    { id: 'skills', icon: Zap, label: 'Skills' },
    { id: 'projects', icon: Layers, label: 'Projects' },
    { id: 'experience', icon: Rocket, label: 'Experience' },
    { id: 'certifications', icon: Palette, label: 'Certifications' },
    { id: 'contact', icon: Code, label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block"
    >
      <div className="flex flex-col space-y-4 p-4 glass-effect-strong rounded-3xl border border-primary-500/20 shadow-glow">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const isActive = currentSection === section.id;
          
          return (
            <motion.button
              key={section.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(section.id)}
              className={`relative group p-4 rounded-2xl transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-glow' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {/* Active Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              
              {/* Content */}
              <div className="relative z-10">
                <Icon className="w-6 h-6" />
              </div>
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-dark-800/95 backdrop-blur-xl border border-primary-500/20 rounded-xl shadow-2xl whitespace-nowrap pointer-events-none"
              >
                <div className="text-sm text-white font-medium">{section.label}</div>
                <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-2 h-2 bg-dark-800/95 border-r border-b border-primary-500/20 rotate-45" />
              </motion.div>
              
              {/* Progress Line */}
              {index < sections.length - 1 && (
                <motion.div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-10 ${
                    isActive ? 'bg-gradient-to-b from-primary-500 to-transparent' : 'bg-gray-600'
                  }`}
                  style={{ top: '100%' }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SectionIndicator;
