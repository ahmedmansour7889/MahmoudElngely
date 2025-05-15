import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
      <div className="animated-bg" />
      
      <div className="container mx-auto px-4 md:px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-primary-blue mb-4 font-medium">مرحباً، أنا</h4>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-text="محمود النجيلي"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glitch"
          >
            محمود النجيلي
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-white/90 h-16"
          >
            <TypeAnimation
              sequence={[
                'مطور واجهات أمامية',
                1000,
                'مصمم مواقع احترافية',
                1000,
                'مطور React.js',
                1000,
                'أُبدع في تصميم تجارب مستخدم مذهلة',
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link to="projects" smooth={true} duration={800} offset={-70} className="neon-btn">
              <span>اعرض مشاريعي</span>
            </Link>
            <Link to="contact" smooth={true} duration={800} offset={-70} className="neon-btn" style={{ borderColor: '#9F44D3' }}>
              <span>تواصل معي</span>
            </Link>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut"
        }}
      >
        <Link to="about" smooth={true} duration={800} offset={-70} className="cursor-pointer">
          <ArrowDown className="text-primary-blue" size={32} />
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;