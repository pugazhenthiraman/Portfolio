import React from 'react';
import { motion } from 'framer-motion';
import { Star, Code } from 'lucide-react';

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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group relative overflow-hidden rounded-3xl glass-effect-strong border border-primary-500/20 hover:border-primary-500/40 hover:shadow-glow-lg transition-all duration-200 no-flicker"
    >
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
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 glass-effect rounded-lg border border-primary-500/20 text-xs text-primary-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
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
    </section>
  );
};

export default Projects;
