import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, ChevronDown, Sparkles, Zap, Target, Layers, Palette, Rocket } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavItem {
  id: string;
  label: string;
  href: string;
  section: string;
  icon: React.ComponentType<any>;
  description: string;
}

const Navbar: React.FC<{ currentSection?: string }> = ({ currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      href: '/',
      section: '#home',
      icon: Sparkles,
      description: 'Welcome to my digital space'
    },
    {
      id: 'about',
      label: 'About',
      href: '/about',
      section: '#about',
      icon: Target,
      description: 'My journey and expertise'
    },
    {
      id: 'skills',
      label: 'Skills',
      href: '/',
      section: '#skills',
      icon: Zap,
      description: 'Technical capabilities'
    },
    {
      id: 'projects',
      label: 'Projects',
      href: '/projects',
      section: '#projects',
      icon: Layers,
      description: 'Portfolio showcase'
    },
    {
      id: 'experience',
      label: 'Experience',
      href: '/',
      section: '#experience',
      icon: Rocket,
      description: 'Professional background'
    },
    {
      id: 'certifications',
      label: 'Certifications',
      href: '/',
      section: '#certifications',
      icon: Palette,
      description: 'Accredited achievements'
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '/contact',
      section: '#contact',
      icon: Code,
      description: 'Let\'s connect'
    }
  ];

  const handleNavigation = (item: NavItem) => {
    if (location.pathname === item.href) {
      const element = document.querySelector(item.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(item.href);
      if (item.href === '/' && item.section !== '#home') {
        setTimeout(() => {
          const element = document.querySelector(item.section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
    setIsOpen(false);
  };

  const isActive = (item: NavItem) => {
    // If we're on a specific page (like /about, /projects, /contact)
    if (location.pathname !== '/' && item.href !== '/') {
      return location.pathname === item.href;
    }
    
    // If we're on the home page, check current section
    if (location.pathname === '/' && currentSection) {
      return currentSection === item.id;
    }
    
    // Default to home if no current section
    return item.id === 'home';
  };

  return (
    <>
      {/* Modern Navigation Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-dark-900/90 backdrop-blur-xl border-b border-primary-500/20 shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-max px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo Section - Left Side */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => navigate('/')}
            >
              <div className="relative">
                <motion.div
                  className="w-14 h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-glow"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Code className="w-7 h-7 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-md"
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="hidden sm:block">
                <motion.div 
                  className="text-2xl font-bold text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  Pugazhenthi
                </motion.div>
                <motion.div 
                  className="text-sm text-primary-300 font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  Frontend Developer
                </motion.div>
              </div>
            </motion.div>

            {/* Desktop Navigation - Right Side */}
            <div className="hidden lg:flex items-center space-x-4">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const active = isActive(item);
                
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleNavigation(item)}
                      className={`relative overflow-hidden px-5 py-3 rounded-2xl font-medium transition-all duration-300 group ${
                        active
                          ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-glow'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {/* Background Animation */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: active ? 1 : hoveredItem === item.id ? 1 : 0,
                          opacity: active ? 1 : hoveredItem === item.id ? 0.8 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                      
                      {/* Content */}
                      <div className="relative z-10 flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{item.label}</span>
                      </div>
                    </motion.button>

                    {/* Hover Tooltip */}
                    <AnimatePresence>
                      {hoveredItem === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-4 py-2 bg-dark-800/95 backdrop-blur-xl border border-primary-500/20 rounded-xl shadow-2xl z-50 whitespace-nowrap"
                        >
                          <div className="text-sm text-white font-medium">{item.description}</div>
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-dark-800/95 border-l border-t border-primary-500/20 rotate-45" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-4 glass-effect rounded-2xl border border-primary-500/20 group"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </motion.div>
              
              {/* Button Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden fixed top-24 left-4 right-4 glass-effect-strong rounded-3xl border border-primary-500/20 shadow-2xl z-50 overflow-hidden"
            >
              <div className="p-6 space-y-3">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const active = isActive(item);
                  
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleNavigation(item)}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl font-medium transition-all duration-300 group ${
                        active
                          ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-glow'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          active ? 'bg-white/20' : 'bg-primary-500/10'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-lg">{item.label}</div>
                          <div className="text-sm opacity-70">{item.description}</div>
                        </div>
                      </div>
                      
                      {active && (
                        <motion.div
                          className="w-3 h-3 bg-white rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
