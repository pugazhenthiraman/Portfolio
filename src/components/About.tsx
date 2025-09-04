import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle, Code, Monitor, Palette, Zap, Users, Target, Award, GraduationCap, Briefcase, Globe, BookOpen, Rocket, Lightbulb, TrendingUp, Star, Heart, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive, modern web applications with React.js, Next.js, and TypeScript",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces and seamless user experiences with Tailwind CSS",
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: Palette,
      title: "AI-Enhanced Development",
      description: "Leveraging AI tools for speed and productivity in development workflows",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "1+", label: "Years Experience", icon: "🎯" },
    { number: "5+", label: "Projects Completed", icon: "🚀" },
    { number: "100%", label: "Client Satisfaction", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "🔄" }
  ];

  const skills = [
    "React.js", "JavaScript", "Node.js", "HTML", "CSS"
  ];

  const education = {
    degree: "B. Com Computer Application",
    institution: "JJ College of Arts and Science",
    period: "2020 - 2023",
    location: "Pudukkottai, India"
  };

  const languages = ["English", "Tamil"];

  const journeySteps = [
    {
      icon: GraduationCap,
      title: "The Foundation",
      subtitle: "B.Com Computer Applications",
      description: "Built a strong foundation in problem-solving and logical thinking through commerce with computer applications.",
      color: "from-blue-500 to-cyan-500",
      emoji: "🎓",
      year: "2020-2023",
      achievement: "Foundation Complete"
    },
    {
      icon: Lightbulb,
      title: "The Discovery",
      subtitle: "Passion Ignited",
      description: "Discovered the magic of web technologies and decided to transition into the exciting world of tech.",
      color: "from-yellow-500 to-orange-500",
      emoji: "💡",
      year: "2023",
      achievement: "Career Path Found"
    },
    {
      icon: BookOpen,
      title: "The Learning",
      subtitle: "Self-Directed Growth",
      description: "Mastered HTML, CSS, JavaScript, then progressed to React, TypeScript, Next.js, and modern design tools.",
      color: "from-green-500 to-emerald-500",
      emoji: "📚",
      year: "2023-2024",
      achievement: "Skills Mastered"
    },
    {
      icon: Code,
      title: "The Building",
      subtitle: "Real-World Projects",
      description: "Developed full-stack applications with Prisma, PostgreSQL, Node.js. Built auction platforms, hiring systems, and course management tools.",
      color: "from-purple-500 to-pink-500",
      emoji: "🛠️",
      year: "2024",
      achievement: "Projects Delivered"
    },
    {
      icon: Rocket,
      title: "The Transformation",
      subtitle: "Professional Developer",
      description: "Now a confident frontend developer with full-stack experience, continuously learning and expanding skills.",
      color: "from-primary-500 to-accent-500",
      emoji: "🌱",
      year: "2025+",
      achievement: "Professional Level"
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 flex items-center justify-center gap-3"
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Target className="w-6 h-6 text-white" />
            </motion.div>
            About Me
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A passionate frontend developer with a journey from commerce to code, 
            creating exceptional digital experiences with modern technologies.
          </motion.p>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3"
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Rocket className="w-6 h-6 text-white" />
            </motion.div>
            My Journey into Frontend Development
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                >
                  {/* Background Gradient */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Card Content */}
                  <div className="relative p-8 glass-effect-strong rounded-3xl border border-primary-500/20 hover:border-primary-500/40 hover:shadow-glow-lg transition-all duration-300 h-full">
                    {/* Emoji Badge */}
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.emoji}
                    </motion.div>
                    
                    {/* Year Badge */}
                    <motion.div 
                      className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full mb-4 border border-primary-500/30"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-xs text-primary-300 font-medium">{step.year}</span>
                    </motion.div>
                    
                    {/* Icon */}
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl shadow-glow flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <h4 className="text-2xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-lg text-primary-300 font-medium mb-4">{step.subtitle}</p>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    
                    {/* Progress Indicator */}
                    <div className="mt-6 flex items-center gap-2">
                      <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${step.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 font-medium">{step.achievement}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Current Status Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="p-8 rounded-3xl glass-effect-strong border border-primary-500/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Current Status */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl font-bold mb-6 flex items-center gap-3"
                >
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Zap className="w-5 h-5 text-white" />
                  </motion.div>
                  Current Status
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-gray-300 mb-8 leading-relaxed"
                >
                  Currently working as a <strong>Front-End Developer at Stigmata Techno Solution</strong>, 
                  I'm working on multiple real-time frontend projects using <strong>React.js, Next.js, TypeScript, 
                  Tailwind CSS, Prisma</strong>, while leveraging <strong>AI tools</strong> to speed up development 
                  and deliver high-quality, scalable UI experiences.
                </motion.p>

                {/* Technical Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-8"
                >
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-400" />
                    Technical Skills
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="flex items-center gap-2 text-sm text-gray-300 group hover:text-primary-300 transition-colors duration-200"
                      >
                        <motion.div 
                          className="w-2 h-2 bg-primary-400 rounded-full group-hover:scale-150 transition-transform duration-200"
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.2 }}
                        />
                        <span className="font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 text-center group hover:border-primary-500/40 transition-all duration-300"
                  >
                    <motion.div 
                      className="text-3xl mb-2"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div 
                      className="text-2xl font-bold gradient-text mb-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* View My Work Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center gap-3 mx-auto group"
          >
            <span className="text-lg">View My Work</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Education & Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-6 rounded-2xl glass-effect-strong border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="w-5 h-5 text-white" />
              </motion.div>
              <h4 className="text-xl font-semibold text-white">Education</h4>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium text-white">{education.degree}</p>
              <p className="text-gray-300">{education.institution}</p>
              <p className="text-sm text-primary-300">{education.period} | {education.location}</p>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-6 rounded-2xl glass-effect-strong border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Globe className="w-5 h-5 text-white" />
              </motion.div>
              <h4 className="text-xl font-semibold text-white">Languages</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((language, index) => (
                <motion.span
                  key={language}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full border border-primary-500/30 text-sm text-primary-300 font-medium"
                >
                  {language}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-surface-800 to-surface-900 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* What I Love Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 rounded-3xl glass-effect-strong border border-primary-500/20 text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">What I Love</h3>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            I'm passionate about clean code, beautiful design, and creating experiences that users love. 
            Every project is an opportunity to learn, grow, and push the boundaries of what's possible on the web.
            I leverage AI tools to enhance productivity and deliver exceptional results faster.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-2xl font-semibold text-lg shadow-glow hover:shadow-glow-lg transition-all duration-300"
          >
            <span>View My Work</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
