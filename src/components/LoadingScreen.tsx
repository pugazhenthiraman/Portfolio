import React, { useState, useEffect, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy load 3D components
const LazyCanvas = React.lazy(() => import('@react-three/fiber').then(module => ({ default: module.Canvas })));
const LazyOrbitControls = React.lazy(() => import('@react-three/drei').then(module => ({ default: module.OrbitControls })));

// Simplified 3D Geometric Elements Component
const GeometricElements: React.FC = () => {
  const sphereRef = useRef<any>(null);
  const torusRef = useRef<any>(null);
  const boxRef = useRef<any>(null);

  useEffect(() => {
    let animationId: number;
    
    const animate = () => {
      const time = Date.now() * 0.001;
      
      if (sphereRef.current) {
        sphereRef.current.rotation.x = Math.sin(time) * 0.2;
        sphereRef.current.rotation.y += 0.005;
      }
      if (torusRef.current) {
        torusRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;
        torusRef.current.rotation.y += 0.003;
      }
      if (boxRef.current) {
        boxRef.current.rotation.x = Math.sin(time * 0.7) * 0.2;
        boxRef.current.rotation.y += 0.004;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#22c55e" />
      
      <mesh ref={sphereRef} position={[-4, 2, 0]}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial color="#22c55e" wireframe opacity={0.3} transparent />
      </mesh>
      
      <mesh ref={torusRef} position={[4, -1, 0]}>
        <torusGeometry args={[1.2, 0.4, 8, 50]} />
        <meshStandardMaterial color="#4ade80" wireframe opacity={0.3} transparent />
      </mesh>
      
      <mesh ref={boxRef} position={[0, 3, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#86efac" wireframe opacity={0.3} transparent />
      </mesh>
    </>
  );
};

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [show3D, setShow3D] = useState(false);
  
  const steps = [
    "Initializing Portfolio",
    "Loading Components",
    "Preparing Animations",
    "Ready to Showcase"
  ];

  useEffect(() => {
    // Show 3D after a short delay
    const timer3D = setTimeout(() => setShow3D(true), 200);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 3; // Faster progress
      });
    }, 30); // Faster updates

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) return steps.length - 1;
        return prev + 1;
      });
    }, 400); // Faster step changes

    return () => {
      clearTimeout(timer3D);
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 overflow-hidden">
      {/* Conditional 3D Background */}
      {show3D && (
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <LazyCanvas camera={{ position: [0, 0, 8], fov: 75 }}>
              <GeometricElements />
              <Suspense fallback={null}>
                <LazyOrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              </Suspense>
            </LazyCanvas>
          </Suspense>
        </div>
      )}

      {/* Simplified Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/30 to-dark-900/60" />
      
      {/* Reduced Matrix Rain Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        {[...Array(6)].map((_, i) => ( // Reduced from 15 to 6
          <div
            key={i}
            className="matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`, // Reduced delay
              animationDuration: `${Math.random() * 5 + 8}s`, // Reduced duration
            }}
          >
            {['01', '10', 'const', 'let'].map((char, j) => ( // Reduced array
              <div key={j} className="mb-1 opacity-40">
                {char}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        {/* Logo/Name */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8" // Reduced margin
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black mb-4" // Reduced size
          >
            <span className="gradient-text">P</span>
          </motion.h1>
          
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/90 font-light tracking-wider"
          >
            Pugazhenthi
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-base md:text-lg text-primary-300 font-medium"
          >
            Frontend Developer & UI/UX Designer
          </motion.p>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-6" // Reduced margin
        >
          {/* Current Step */}
          <motion.p
            key={currentStep}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-base text-primary-200 mb-3 font-medium"
          >
            {steps[currentStep]}
          </motion.p>

          {/* Progress Bar */}
          <div className="relative w-64 h-1.5 bg-dark-700 rounded-full mx-auto overflow-hidden"> {/* Reduced size */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xs text-primary-400 mt-1"
          >
            {progress}%
          </motion.p>
        </motion.div>

        {/* Simplified Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center space-x-1.5"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary-400 rounded-full" // Reduced size
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* UI/UX Development Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 glass-effect rounded-full border border-primary-500/20" // Reduced padding
        >
          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse" />
          <span className="text-xs text-primary-300 font-medium">UI/UX Development Portfolio</span>
        </motion.div>
      </div>

      {/* Reduced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => ( // Reduced from 15 to 8
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full" // Reduced size
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0], // Reduced movement
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2, // Reduced duration
              repeat: Infinity,
              delay: Math.random() * 1, // Reduced delay
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Simplified Corner Accents */}
      <motion.div
        className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-primary-500/20" // Reduced size
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      <motion.div
        className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-accent-500/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
    </div>
  );
};

export default LoadingScreen;
