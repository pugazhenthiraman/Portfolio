import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Zap, Code, Monitor, Palette, Database, Cloud, Smartphone, Globe, Server } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  description: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: Code,
      color: 'from-primary-500 to-primary-600',
      bgColor: 'from-primary-500/20 to-primary-600/20',
      description: 'Modern web technologies and frameworks'
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/20 to-emerald-500/20',
      description: 'Server-side technologies and databases'
    },
    {
      id: 'design',
      name: 'UI/UX Design',
      icon: Monitor,
      color: 'from-accent-500 to-accent-600',
      bgColor: 'from-accent-500/20 to-accent-600/20',
      description: 'User interface and experience design'
    }
  ];

  const skillsData: { [key: string]: Skill[] } = {
    frontend: [
      { name: 'React', level: 95, icon: '⚛️', color: 'from-primary-500 to-accent-500', category: 'frontend' },
      { name: 'Next.js', level: 90, icon: '🚀', color: 'from-primary-500 to-accent-500', category: 'frontend' },
      { name: 'TypeScript', level: 88, icon: '📘', color: 'from-primary-500 to-accent-500', category: 'frontend' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨', color: 'from-primary-500 to-accent-500', category: 'frontend' },
      { name: 'Framer Motion', level: 85, icon: '✨', color: 'from-primary-500 to-accent-500', category: 'frontend' },
      { name: 'HTML', level: 95, icon: '🌐', color: 'from-primary-500 to-accent-500', category: 'frontend' },
      { name: 'CSS', level: 90, icon: '🎨', color: 'from-primary-500 to-accent-500', category: 'frontend' },
      { name: 'JavaScript', level: 92, icon: '📜', color: 'from-primary-500 to-accent-500', category: 'frontend' }
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: '🟢', color: 'from-green-500 to-emerald-500', category: 'backend' },
      { name: 'Express.js', level: 80, icon: '🚂', color: 'from-green-500 to-emerald-500', category: 'backend' },
      { name: 'MongoDB', level: 75, icon: '🍃', color: 'from-green-500 to-emerald-500', category: 'backend' },
      { name: 'PostgreSQL', level: 70, icon: '🐘', color: 'from-green-500 to-emerald-500', category: 'backend' },
      { name: 'REST APIs', level: 85, icon: '🔌', color: 'from-green-500 to-emerald-500', category: 'backend' },
      { name: 'Prisma', level: 75, icon: '🗄️', color: 'from-green-500 to-emerald-500', category: 'backend' }
    ],
    design: [
      { name: 'UI Design', level: 90, icon: '🎨', color: 'from-accent-500 to-pink-500', category: 'design' },
      { name: 'UX Research', level: 85, icon: '🔍', color: 'from-accent-500 to-pink-500', category: 'design' },
      { name: 'Figma', level: 88, icon: '✏️', color: 'from-accent-500 to-pink-500', category: 'design' },
    ]
  };

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{skill.icon}</span>
        <span className="text-lg font-medium text-white">{skill.name}</span>
        <span className="text-sm text-primary-300 ml-auto">{skill.level}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-6 border border-primary-500/20"
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-primary-300 font-medium">Technical expertise</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my technical skills and expertise across various domains 
            of web development and design.
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`relative overflow-hidden px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-glow`
                    : 'glass-effect text-gray-300 hover:text-white border border-primary-500/20'
                }`}
              >
                {activeCategory === category.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500"
                    initial={{ x: '-100%' }}
                    animate={{ x: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <div className="relative z-10 flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Content */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Skill Bars */}
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
              className="text-3xl font-bold mb-8 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              Skill Proficiency
            </motion.h3>
            
            <div className="space-y-6">
              {skillsData[activeCategory].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 glass-effect rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-lg font-semibold text-white">{skill.name}</span>
                    </div>
                    <span className="text-lg font-bold text-primary-300">{skill.level}%</span>
                  </div>
                  
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                  
                  {/* Proficiency Dots */}
                  <div className="flex gap-2 mt-3">
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0.5 + index * 0.1 + i * 0.05 }}
                        className={`w-3 h-3 rounded-full ${
                          i < Math.floor(skill.level / 10)
                            ? `bg-gradient-to-r ${skill.color}`
                            : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Always Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 glass-effect rounded-3xl border border-primary-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-primary-400" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Always Learning</h4>
              <p className="text-gray-300 leading-relaxed">
                I'm constantly expanding my skill set and staying updated with the latest technologies. 
                Currently exploring advanced React patterns, performance optimization, and emerging web standards.
              </p>
            </motion.div>

            {/* Progress Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 glass-effect-strong rounded-3xl border border-primary-500/20"
            >
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                Current Focus
              </h4>
              
              <div className="space-y-4">
                {[
                  { skill: 'Advanced React', progress: 85, color: 'from-primary-500 to-accent-500' },
                  { skill: 'Performance Optimization', progress: 75, color: 'from-accent-500 to-green-500' },
                  { skill: 'Web Accessibility', progress: 80, color: 'from-green-500 to-blue-500' }
                ].map((item, index) => (
                  <div key={item.skill} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{item.skill}</span>
                      <span className="text-primary-300">{item.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
