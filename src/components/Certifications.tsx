import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Target, X, Calendar, BookOpen, Star, CheckCircle, Shield, Crown, Trophy } from 'lucide-react';

const Certifications: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = React.useState<string | null>(null);

  const certificateData = [
    {
      name: "HTML-For Beginners",
      image: "/certificates/html.jpg",
      issuer: "Udemy",
      date: "2023",
      description: "Complete HTML fundamentals and best practices",
      level: "Beginner",
      duration: "8 hours",
      rating: 4.8
    },
    {
      name: "CSS-For Beginners", 
      image: "/certificates/css.jpg",
      issuer: "Udemy",
      date: "2023",
      description: "Modern CSS techniques and responsive design",
      level: "Beginner",
      duration: "12 hours",
      rating: 4.9
    },
    {
      name: "JavaScript: Beginner to Expert",
      image: "/certificates/JavaScript.jpg",
      issuer: "Udemy",
      date: "2023",
      description: "Comprehensive JavaScript programming course",
      level: "Advanced",
      duration: "25 hours",
      rating: 4.7
    },
    {
      name: "React Js",
      image: "/certificates/React Js.jpg",
      issuer: "Udemy",
      date: "2024",
      description: "Full-stack React development with modern tools",
      level: "Intermediate",
      duration: "18 hours",
      rating: 4.8
    },
    {
      name: "Node.js",
      image: "/certificates/Node js.jpg",
      issuer: "Udemy",
      date: "2024",
      description: "Server-side JavaScript development with Node.js",
      level: "Advanced",
      duration: "20 hours",
      rating: 4.6
    }
  ];

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'Beginner': return <Award className="w-4 h-4" />;
      case 'Intermediate': return <Award className="w-4 h-4" />;
      case 'Advanced': return <Award className="w-4 h-4" />;
      default: return <Award className="w-4 h-4" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'from-primary-500 to-accent-500';
      case 'Intermediate': return 'from-primary-500 to-accent-500';
      case 'Advanced': return 'from-primary-500 to-accent-500';
      default: return 'from-primary-500 to-accent-500';
    }
  };

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Classic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1)_0%,transparent_50%)]" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container-max relative z-10">
        {/* Classic Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Classic Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-full mb-8 border border-primary-500/30 shadow-lg"
          >
            <div className="w-2 h-2 bg-primary-400 rounded-full" />
            <Award className="w-5 h-5 text-primary-400" />
            <span className="text-sm text-primary-300 font-medium tracking-wide">PROFESSIONAL ACHIEVEMENTS</span>
            <div className="w-2 h-2 bg-primary-400 rounded-full" />
          </motion.div>
          
          {/* Classic Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
          >
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </motion.h2>
          
          {/* Classic Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed tracking-wide"
          >
            Validated expertise through comprehensive courses and professional certifications. 
            Each certificate represents a milestone in my journey to becoming a skilled frontend developer.
          </motion.p>

          {/* Classic Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center items-center gap-12 mt-16"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-3 font-serif">5</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Certifications</div>
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary-500/50 to-transparent" />
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-400 mb-3 font-serif">83+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Hours Completed</div>
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary-500/50 to-transparent" />
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-3 font-serif">4.8</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Average Rating</div>
            </div>
          </motion.div>
        </motion.div>

                          {/* Classic Certificates Grid */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20"
         >
           {certificateData.map((cert, index) => (
             <motion.div
               key={cert.name}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               whileHover={{ y: -8, scale: 1.02 }}
               className="group relative"
             >
               {/* Classic Card */}
               <div className="relative p-5 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-500 h-full cursor-pointer group shadow-xl hover:shadow-2xl hover:shadow-primary-500/20"
                    onClick={() => setSelectedCertificate(cert.image)}>
                 
                 {/* Classic Level Badge */}
                 <div className="absolute top-3 left-3 z-10">
                   <div className="px-2 py-1 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-lg border border-primary-500/40 backdrop-blur-sm">
                     <div className="flex items-center gap-1">
                       {getLevelIcon(cert.level)}
                       <span className="text-xs font-semibold text-primary-200">
                         {cert.level}
                       </span>
                     </div>
                   </div>
                 </div>

                 {/* Classic Rating Badge */}
                 <div className="absolute top-3 right-3 z-10">
                   <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-amber-600/30 to-orange-600/30 rounded-lg border border-amber-500/40 backdrop-blur-sm">
                     <Star className="w-3 h-3 text-amber-300 fill-current" />
                     <span className="text-xs text-amber-300 font-semibold">{cert.rating}</span>
                   </div>
                 </div>

                 {/* Classic Certificate Image */}
                 <div className="relative mb-4 overflow-hidden rounded-xl">
                   <img 
                     src={cert.image} 
                     alt={cert.name}
                     className="w-full aspect-[4/3] object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                     onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       target.style.display = 'none';
                       target.nextElementSibling?.classList.remove('hidden');
                     }}
                   />
                   {/* Fallback */}
                   <div className="aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center hidden">
                     <div className="text-center">
                       <Award className="w-12 h-12 text-primary-400 mx-auto mb-2" />
                       <p className="text-sm text-slate-400">Certificate Image</p>
                     </div>
                   </div>
                   {/* Classic Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-3">
                     <div className="text-center">
                       <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-sm border border-white/20">
                         <Target className="w-4 h-4 text-white" />
                       </div>
                       <span className="text-white text-xs font-medium tracking-wide">VIEW</span>
                     </div>
                   </div>
                 </div>
                
                                 {/* Classic Certificate Info */}
                 <div className="space-y-3">
                   <h4 className="font-bold text-white text-base leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-accent-400 transition-all duration-300">
                     {cert.name}
                   </h4>
                   
                   <div className="flex items-center justify-between text-sm">
                     <span className="text-primary-300 font-medium">{cert.issuer}</span>
                     <span className="text-slate-400">{cert.date}</span>
                   </div>
                   
                   <p className="text-slate-400 text-xs leading-relaxed">{cert.description}</p>
                   
                   {/* Classic Duration */}
                   <div className="flex items-center gap-2 text-xs text-slate-500">
                     <Calendar className="w-3 h-3" />
                     <span className="tracking-wide">{cert.duration}</span>
                   </div>
                 </div>
                 
                 {/* Classic Status Indicator */}
                 <div className="absolute bottom-3 right-3">
                   <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full animate-pulse"></div>
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Classic Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Classic Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate modal"
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200 backdrop-blur-sm border border-white/20"
              >
                <X className="w-6 h-6" />
              </motion.button>
              
              {/* Classic Certificate Image */}
              <div className="relative">
                <img 
                  src={selectedCertificate} 
                  alt="Certificate"
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                
                {/* Classic Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xl font-bold tracking-wide">Professional Certification</div>
                        <div className="text-sm text-slate-300 tracking-wide">Validated by Udemy</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm tracking-wide">2023-2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-400" />
                        <span className="text-sm tracking-wide">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;

