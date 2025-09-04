import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Code, Monitor, Palette, Database, Cloud, Smartphone, Globe, Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface Service {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { name: "GitHub", url: "https://github.com/pugazhenthiraman", icon: Github, color: "hover:bg-gray-800" },
    { name: "LinkedIn", url: "https://linkedin.com/in/pugazhenthiraman", icon: Linkedin, color: "hover:bg-blue-600" },
    { name: "Email", url: "mailto:pugazhenthiramval@gmail.com", icon: Mail, color: "hover:bg-red-500" },
    { name: "Portfolio", url: "/", icon: Globe, color: "hover:bg-primary-500" }
  ];

  const services: Service[] = [
    { name: "Frontend Development", description: "React.js, Next.js, TypeScript", icon: Code },
    { name: "UI/UX Design", description: "User-centered design solutions", icon: Monitor },
    { name: "Full-Stack Solutions", description: "End-to-end web applications", icon: Database },
    { name: "AI-Enhanced Development", description: "Leveraging AI tools for productivity", icon: Smartphone }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-dark-950 via-dark-900 to-dark-800 border-t border-primary-500/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial opacity-10" />
      
      <div className="container-max px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl shadow-glow flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">Pugazhenthi</div>
                <div className="text-sm text-primary-300">Frontend Developer</div>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md">
              Passionate about creating exceptional digital experiences with modern web technologies. 
              Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.15, y: -8 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 glass-effect-strong rounded-2xl flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:shadow-glow-lg border border-primary-500/20`}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Skills', href: '/#skills' },
                { name: 'Projects', href: '/projects' },
                { name: 'Experience', href: '/#experience' },
                { name: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-300 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full" />
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <Icon className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-gray-300 font-medium text-sm">{service.name}</div>
                      <div className="text-gray-500 text-xs">{service.description}</div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-8 glass-effect-strong rounded-3xl border border-primary-500/20 max-w-2xl mx-auto text-center mb-16"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-primary-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Let's collaborate to bring your ideas to life. I'm here to help you create 
            exceptional digital experiences that users love.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-2xl font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent mb-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400 text-sm">
              © 2024 Pugazhenthi. All rights reserved. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-400" /> and lots of coffee.
            </p>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 glass-effect rounded-2xl border border-primary-500/20 hover:border-primary-500/40 hover:shadow-glow transition-all duration-300 flex items-center gap-2"
          >
            <ArrowUp className="w-4 h-4 text-primary-400" />
            <span className="text-primary-300 font-medium">Back to Top</span>
          </motion.button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 right-32 w-6 h-6 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full opacity-40"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/3 w-3 h-3 bg-gradient-to-r from-primary-300 to-accent-300 rounded-full opacity-50"
        />
      </div>
    </footer>
  );
};

export default Footer;
