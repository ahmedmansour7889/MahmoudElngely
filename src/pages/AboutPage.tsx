import React from 'react';
import AboutSection from '../sections/AboutSection';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutSection />
    </motion.div>
  );
};

export default AboutPage;
