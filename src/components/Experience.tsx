import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Download, ArrowRight, Code, Monitor, Database, Cloud, Users, Target, Award, Calendar, MapPin, Building } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  logo: string;
  color: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      company: "Stigmata Techno Solution",
      position: "Front-End Developer",
      duration: "Jan 2025 - Present",
      location: "Chennai, India",
      type: "Full-time",
      logo: "🏢",
      color: "from-primary-500 to-accent-500",
      description: "Working on multiple real-time frontend projects using React.js, Next.js, TypeScript, Tailwind CSS, Prisma, while leveraging AI tools to speed up development and deliver high-quality, scalable UI experiences.",
      achievements: [
        "Working on multiple real-time frontend projects",
        "Leveraging AI tools for enhanced productivity",
        "Delivering high-quality, scalable UI experiences",
        "Collaborating with cross-functional teams"
      ],
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "AI Tools"]
    },
    {
      id: 2,
      company: "Stigmata Techno Solutions",
      position: "Junior Software Developer Intern",
      duration: "2024 - 2025",
      location: "Chennai, India",
      type: "Internship",
      logo: "🚀",
      color: "from-accent-500 to-green-500",
      description: "Gained hands-on frontend experience by fixing UI bugs, improving designs, and supporting testing, while strengthening JavaScript and teamwork skills.",
      achievements: [
        "Fixed UI bugs and improved designs",
        "Supported testing and quality assurance",
        "Strengthened JavaScript skills",
        "Developed teamwork and collaboration skills"
      ],
      technologies: ["JavaScript", "React", "CSS", "HTML", "Git", "Testing"]
    }
  ];

  const skills = [
    { name: "React.js & Next.js", level: 95, icon: "⚛️" },
    { name: "TypeScript", level: 90, icon: "📘" },
    { name: "Tailwind CSS", level: 92, icon: "🎨" },
    { name: "Prisma & PostgreSQL", level: 85, icon: "🗄️" },
    { name: "AI-Enhanced Development", level: 88, icon: "🤖" }
  ];

  const stats = [
    { label: "Years Experience", value: "1+", icon: "📅" },
    { label: "Projects Completed", value: "5+", icon: "🚀" },
    { label: "Happy Clients", value: "5+", icon: "😊" },
    { label: "Technologies Mastered", value: "3+", icon: "🛠️" }
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-glass-effect rounded-full mb-6 border border-primary-500/20"
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-primary-300 font-medium">My career journey</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            My professional journey in web development, from intern to frontend developer, 
            showcasing growth, achievements, and continuous learning with modern technologies.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-300" />
              
              {/* Timeline Items */}
              <div className="space-y-16">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-6 w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full shadow-glow transform -translate-x-1/2" />
                    
                    {/* Content */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="ml-16 glass-effect-strong rounded-3xl border border-primary-500/20 hover:border-primary-500/40 hover:shadow-glow-lg transition-all duration-300 p-8"
                    >
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${experience.color} rounded-2xl shadow-glow flex items-center justify-center text-2xl`}>
                          {experience.logo}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">{experience.position}</h3>
                          <p className="text-lg text-primary-300 mb-2">{experience.company}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {experience.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {experience.location}
                            </span>
                          </div>
                        </div>
                        <span className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-sm border border-primary-500/30 backdrop-blur-sm rounded-full text-primary-300">
                          {experience.type}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                              <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Code className="w-5 h-5 text-primary-400" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {experience.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-glass-effect rounded-xl border border-primary-500/20 text-sm text-primary-300 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Professional Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 glass-effect-strong rounded-3xl border border-primary-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                Professional Skills
              </h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-primary-300 font-bold text-lg">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Download Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-8 glass-effect-strong rounded-3xl border border-primary-500/20 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-primary-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Download Resume</h4>
              <p className="text-gray-300 mb-6">
                Get a detailed overview of my skills, experience, and achievements in a downloadable format.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-2xl font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300"
              >
                <span>Download PDF</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
