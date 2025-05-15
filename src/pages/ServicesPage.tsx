import React from 'react';
import ServicesSection from '../sections/ServicesSection';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ServicesSection />
    </motion.div>
  );
};

export default ServicesPage;
