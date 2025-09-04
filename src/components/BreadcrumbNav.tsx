import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const BreadcrumbNav: React.FC = () => {
  const location = useLocation();
  const [currentSection, setCurrentSection] = React.useState('home');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBreadcrumbItems = () => {
    const items = [
      { label: 'Home', section: 'home', icon: Home }
    ];

    if (currentSection !== 'home') {
      const sectionLabels = {
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        certifications: 'Certifications',
        contact: 'Contact'
      };

      items.push({
        label: sectionLabels[currentSection as keyof typeof sectionLabels] || currentSection,
        section: currentSection,
        icon: null
      });
    }

    return items;
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed top-24 left-6 z-40 hidden lg:block"
    >
      <div className="flex items-center space-x-2 p-3 glass-effect-strong rounded-2xl border border-primary-500/20 shadow-glow">
        {getBreadcrumbItems().map((item, index) => (
          <React.Fragment key={item.section}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.section)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl font-medium transition-all duration-300 ${
                currentSection === item.section
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-glow'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.icon && <item.icon className="w-4 h-4" />}
              <span className="text-sm">{item.label}</span>
            </motion.button>
            
            {index < getBreadcrumbItems().length - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
              >
                <ChevronRight className="w-4 h-4 text-primary-400" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export default BreadcrumbNav;
