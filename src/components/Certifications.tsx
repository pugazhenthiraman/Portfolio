import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, X } from 'lucide-react';

const Certifications: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = React.useState<string | null>(null);

  const certificateData = [
    {
      name: "HTML-For Beginners",
      image: "/certificates/html.jpg",
      issuer: "Udemy",
      date: "2023",
      description: "Complete HTML fundamentals and best practices"
    },
    {
      name: "CSS-For Beginners", 
      image: "/certificates/css.jpg",
      issuer: "Udemy",
      date: "2023",
      description: "Modern CSS techniques and responsive design"
    },
    {
      name: "JavaScript: Beginner to Expert",
      image: "/certificates/JavaScript.jpg",
      issuer: "Udemy",
      date: "2023",
      description: "Comprehensive JavaScript programming course"
    },
    {
      name: "React Js",
      image: "/certificates/React Js.jpg",
      issuer: "Udemy",
      date: "2024",
      description: "Full-stack React development with modern tools"
    },
    {
      name: "Node.js",
      image: "/certificates/Node js.jpg",
      issuer: "Udemy",
      date: "2024",
      description: "Server-side JavaScript development with Node.js"
    }
  ];

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
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
            <Award className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-primary-300 font-medium">Professional Achievements</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            My <span className="gradient-text">Certifications</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Validated expertise through comprehensive courses and professional certifications. 
            Each certificate represents a milestone in my journey to becoming a skilled frontend developer.
          </motion.p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20"
        >
          {certificateData.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Card Content */}
              <div className="relative p-6 glass-effect-strong rounded-2xl border border-primary-500/20 hover:border-green-500/40 hover:shadow-glow-lg transition-all duration-300 h-full cursor-pointer group"
                   onClick={() => setSelectedCertificate(cert.image)}>
                {/* Certificate Image */}
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={cert.image} 
                    alt={cert.name}
                    className="w-full aspect-[4/3] object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback if image fails to load */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center hidden">
                    <div className="text-center">
                      <Award className="w-12 h-12 text-green-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-400">Certificate Image</p>
                    </div>
                  </div>
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white text-sm font-medium">Click to View</span>
                    </div>
                  </div>
                </div>
                
                {/* Certificate Info */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-white text-sm leading-tight">{cert.name}</h4>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-primary-300">{cert.issuer}</span>
                    <span className="text-gray-400">{cert.date}</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{cert.description}</p>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl glass-effect-strong border border-primary-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate modal"
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Certificate Image */}
            <div className="relative">
              <img 
                src={selectedCertificate} 
                alt="Certificate"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Certifications;
