import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Star, Zap, ExternalLink, Github, Eye, Code, Monitor, Palette, Database, Users, CreditCard, X, Calendar, Clock, Globe } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  github: string;
  live: string;
  category: string;
  rating: number;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  color: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Gluby E-Auction Platform",
      description: "A comprehensive online auction platform built with Next.js, Prisma, and PostgreSQL. Features role-based authentication (Buyer, Seller, Admin), real-time bidding, seller approval workflows, anonymous bidding system, reward points system, and mobile-responsive design. Connects sellers with buyers in a transparent marketplace for sustainable recycling.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "TypeScript", "Tailwind CSS", "Real-time", "NextAuth.js", "Zustand"],
      features: ["Role-based authentication", "Real-time bidding system", "Anonymous bidding", "Reward points system", "Seller approval workflows", "Mobile-responsive design"],
      image: "/gluby-auction.jpg",
      github: "https://github.com/pugazhenthiraman/E-auctionCompletedVersion",
      live: "https://e-auction-completed-version-two.vercel.app/",
      category: "fullstack",
      rating: 5,
      complexity: "Advanced",
      color: "from-primary-500 to-accent-500"
    },
    {
      id: 2,
      title: "Full-Stack Blinkit Clone",
      description: "A complete e-commerce platform clone of Blinkit built with Node.js, Express, and MongoDB. Features product management, user authentication, email notifications, purchase system, and admin dashboard. Includes backend API with email integration and full-stack functionality for online grocery delivery.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JavaScript", "Email System", "REST API", "Authentication"],
      features: ["Product management", "User authentication", "Email notifications", "Purchase system", "Admin dashboard", "Backend API"],
      image: "/blinkit-clone.jpg",
      github: "https://github.com/pugazhenthiraman/Full-Stack-Blinkit-Clone",
      live: "",
      category: "fullstack",
      rating: 5,
      complexity: "Advanced",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Luminary Learning Platform",
      description: "A modern learning platform built with React.js, TypeScript, and Tailwind CSS. Features course management, user authentication, and interactive learning modules. Designed for educational institutions to streamline their online learning processes with a focus on user experience and modern design.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Modern UI/UX"],
      features: ["Course management", "User authentication", "Interactive learning modules", "Modern UI design", "Responsive layout", "Performance optimized"],
      image: "/luminary.jpg",
      github: "https://github.com/pugazhenthiraman/Luminary",
      live: "https://infinity-supports.netlify.app/",
      category: "frontend",
      rating: 4,
      complexity: "Intermediate",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "St. Marteen Survey Form",
      description: "A comprehensive survey platform built with React, TypeScript, and Tailwind CSS. Features progress tracking, section navigation, data-driven survey logic, and smooth UI transitions. Built with modern development practices and optimized for user experience.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "React Context"],
      features: ["Progress tracking", "Section navigation", "Data-driven logic", "Smooth transitions", "Responsive design", "State management"],
      image: "/survey-form.jpg",
      github: "https://github.com/pugazhenthiraman/Surveyform",
      live: "",
      category: "frontend",
      rating: 4,
      complexity: "Intermediate",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      title: "Weather Application",
      description: "A modern weather application with live data integration. Features real-time weather updates, location-based forecasts, and an intuitive user interface. Built with modern web technologies and optimized for performance and user experience.",
      technologies: ["React.js", "Weather API", "Geolocation", "Modern UI", "Responsive Design"],
      features: ["Real-time weather data", "Location-based forecasts", "Intuitive UI", "Responsive design", "Performance optimized", "Modern interface"],
      image: "/weather-app.jpg",
      github: "https://github.com/pugazhenthiraman/weather",
      live: "",
      category: "frontend",
      rating: 4,
      complexity: "Intermediate",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      title: "Calculator Application",
      description: "A modern calculator application with advanced mathematical functions and a clean, intuitive interface. Features standard arithmetic operations, scientific functions, and responsive design for all devices.",
      technologies: ["React.js", "JavaScript", "CSS", "Modern UI", "Responsive Design"],
      features: ["Standard arithmetic operations", "Scientific functions", "Clean interface", "Responsive design", "Keyboard support", "Modern UI"],
      image: "/calculator.jpg",
      github: "https://github.com/pugazhenthiraman/Calculator",
      live: "",
      category: "frontend",
      rating: 3,
      complexity: "Beginner",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
    <div className="group relative overflow-hidden rounded-3xl glass-effect-strong border border-primary-500/20 hover:border-primary-500/40 hover:shadow-glow-lg transition-all duration-200 no-flicker">
      {/* Header with Badges */}
      <div className="relative p-6 pb-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
              <Star className="w-3 h-3 text-yellow-400" />
              <span className="text-xs text-yellow-400 font-medium">{project.rating}</span>
            </div>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
              {project.complexity}
            </span>
          </div>
          <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-lg border border-green-500/30">
            Live
          </div>
        </div>

        {/* Project Icon */}
        <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Code className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 pt-0">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-sm text-gray-300 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 glass-effect rounded-lg border border-primary-500/20 text-xs text-primary-300 font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 glass-effect rounded-lg border border-primary-500/20 text-xs text-primary-300 font-medium">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* View Details Button */}
        <button
          onClick={() => {
            setSelectedProject(project);
            setIsModalOpen(true);
          }}
          className="w-full mt-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-xl text-primary-300 font-medium text-sm hover:border-primary-500/50 hover:bg-gradient-to-r hover:from-primary-500/30 hover:to-accent-500/30 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Eye className="w-4 h-4" />
          View Full Details
        </button>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            Featured Projects
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my latest projects showcasing modern web development, 
            innovative solutions, and cutting-edge technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-effect-strong rounded-3xl border border-primary-500/20 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 hover:bg-red-500/30 transition-colors duration-200"
                aria-label="Close project modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                {/* Project Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary-400" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 glass-effect rounded-lg border border-primary-500/20 text-sm text-primary-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl font-medium hover:shadow-glow transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </motion.a>
                  
                  <motion.a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-medium hover:shadow-glow transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
