import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
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
            data-text="✨ محمود النجيلي ✨"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glitch"
          >
            ✨ محمود النجيلي ✨
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-white/90 h-16"
          >
            <TypeAnimation
              sequence={[
                'مطور واجهات أمامية أُبدع في بناء مواقع سريعة، جذابة، ومتجاوبة.',
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
            className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
          >
            <Link
              to="/projects"
              className="neon-btn group transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                اعرض مشاريعي
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
            </Link>
            <Link
              to="/contact"
              className="neon-btn group transform hover:scale-105 transition-all duration-300"
              style={{ borderColor: '#9F44D3' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                تواصل معي
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  ✨
                </motion.span>
              </span>
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
        <Link
          to="/about"
          className="cursor-pointer"
          aria-label="الانتقال إلى قسم من أنا"
          title="الانتقال إلى قسم من أنا"
        >
          <ArrowDown className="text-primary-blue" size={32} />
        </Link>
      </motion.div>
    </section>
  );
};

export default HomePage;