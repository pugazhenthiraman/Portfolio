import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Zap, Code, Monitor, Palette, Database, Cloud, Smartphone, Globe, Server } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
  category: string;
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
      description: 'Modern web technologies and frameworks for creating exceptional user interfaces'
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: Server,
      color: 'from-accent-500 to-accent-600',
      bgColor: 'from-accent-500/20 to-accent-600/20',
      description: 'Server-side technologies and databases for robust application architecture'
    },
    {
      id: 'design',
      name: 'UI/UX Design',
      icon: Monitor,
      color: 'from-neutral-400 to-neutral-500',
      bgColor: 'from-neutral-400/20 to-neutral-500/20',
      description: 'User interface and experience design with focus on usability and aesthetics'
    }
  ];

  const skillsData: { [key: string]: Skill[] } = {
    frontend: [
      { name: 'React', level: 95, icon: '⚛️', color: 'from-primary-500 to-primary-600', category: 'frontend' },
      { name: 'Next.js', level: 90, icon: '🚀', color: 'from-primary-500 to-primary-600', category: 'frontend' },
      { name: 'TypeScript', level: 88, icon: '📘', color: 'from-primary-500 to-primary-600', category: 'frontend' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨', color: 'from-primary-500 to-primary-600', category: 'frontend' },
      { name: 'Framer Motion', level: 85, icon: '✨', color: 'from-primary-500 to-primary-600', category: 'frontend' },
      { name: 'HTML5', level: 95, icon: '🌐', color: 'from-primary-500 to-primary-600', category: 'frontend' },
      { name: 'CSS3', level: 90, icon: '🎨', color: 'from-primary-500 to-primary-600', category: 'frontend' },
      { name: 'JavaScript', level: 92, icon: '📜', color: 'from-primary-500 to-primary-600', category: 'frontend' }
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: '🟢', color: 'from-accent-500 to-accent-600', category: 'backend' },
      { name: 'Express.js', level: 80, icon: '🚂', color: 'from-accent-500 to-accent-600', category: 'backend' },
      { name: 'MongoDB', level: 75, icon: '🍃', color: 'from-accent-500 to-accent-600', category: 'backend' },
      { name: 'PostgreSQL', level: 70, icon: '🐘', color: 'from-accent-500 to-accent-600', category: 'backend' },
      { name: 'REST APIs', level: 85, icon: '🔌', color: 'from-accent-500 to-accent-600', category: 'backend' },
      { name: 'Prisma', level: 75, icon: '🗄️', color: 'from-accent-500 to-accent-600', category: 'backend' }
    ],
    design: [
      { name: 'UI Design', level: 90, icon: '🎨', color: 'from-neutral-400 to-neutral-500', category: 'design' },
      { name: 'UX Research', level: 85, icon: '🔍', color: 'from-neutral-400 to-neutral-500', category: 'design' },
      { name: 'Figma', level: 88, icon: '✏️', color: 'from-neutral-400 to-neutral-500', category: 'design' },
      { name: 'Prototyping', level: 82, icon: '🔧', color: 'from-neutral-400 to-neutral-500', category: 'design' },
    ]
  };

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <motion.div 
      className="mb-8 group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4 mb-4">
        <motion.span 
          className="text-3xl filter drop-shadow-lg"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {skill.icon}
        </motion.span>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-semibold text-neutral-100 group-hover:text-primary-300 transition-colors duration-300">
              {skill.name}
            </span>
            <motion.span 
              className="text-sm font-medium text-primary-400 bg-primary-400/10 px-3 py-1 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              {skill.level}%
            </motion.span>
          </div>
        </div>
      </div>
      <div className="progress-bar group-hover:shadow-glow-orange transition-all duration-300">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.2, 
            delay: 0.2,
            ease: "easeOut"
          }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial-warm opacity-20" />
      <div className="absolute inset-0 bg-gradient-mesh-warm opacity-15" />
      
      {/* Professional Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 
                ? 'linear-gradient(45deg, #f59e0b, #d97706)' 
                : 'linear-gradient(45deg, #c026d3, #d946ef)',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Professional Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Sparkles className="w-8 h-8 text-primary-400" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text">
              Technical Expertise
            </h2>
            <TrendingUp className="w-8 h-8 text-primary-400" />
          </motion.div>
          
          <motion.p 
            className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Mastering cutting-edge technologies to create exceptional digital experiences. 
            From concept to deployment, I bring ideas to life with precision and creativity.
          </motion.p>
        </motion.div>

        {/* Enhanced Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 group
                  ${activeCategory === category.id 
                    ? 'glass-effect-strong text-primary-300 shadow-glow-orange' 
                    : 'glass-effect text-neutral-300 hover:glass-effect-strong hover:text-primary-400'
                  }
                `}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span>{category.name}</span>
                </div>
                
                {activeCategory === category.id && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 to-accent-500/20"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Enhanced Skills Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {/* Skills List */}
          <motion.div 
            className="space-y-2"
            key={activeCategory}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h3 
              className="text-2xl font-bold text-neutral-100 mb-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-6 h-6 text-primary-400" />
              {skillCategories.find(cat => cat.id === activeCategory)?.name}
            </motion.h3>
            
            {skillsData[activeCategory]?.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <SkillBar skill={skill} />
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Category Info */}
          <motion.div 
            className="glass-card p-8 lg:p-10"
            key={`${activeCategory}-info`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                {React.createElement(skillCategories.find(cat => cat.id === activeCategory)?.icon || Code, {
                  className: "w-12 h-12 text-primary-400"
                })}
                <h3 className="text-3xl font-bold gradient-text-elegant">
                  {skillCategories.find(cat => cat.id === activeCategory)?.name}
                </h3>
              </div>
              
              <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                {skillCategories.find(cat => cat.id === activeCategory)?.description}
              </p>

              {/* Professional Stats */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="text-center p-4 rounded-xl bg-primary-500/10 border border-primary-500/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold gradient-text-elegant mb-2">
                    {skillsData[activeCategory]?.length || 0}
                  </div>
                  <div className="text-sm text-neutral-400 font-medium">Technologies</div>
                </motion.div>
                
                <motion.div 
                  className="text-center p-4 rounded-xl bg-accent-500/10 border border-accent-500/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold gradient-text-elegant mb-2">
                    {Math.round(
                      (skillsData[activeCategory]?.reduce((acc, skill) => acc + skill.level, 0) || 0) / 
                      (skillsData[activeCategory]?.length || 1)
                    )}%
                  </div>
                  <div className="text-sm text-neutral-400 font-medium">Avg Proficiency</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
