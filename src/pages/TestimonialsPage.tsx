import React from 'react';
import TestimonialsSection from '../sections/TestimonialsSection';
import { motion } from 'framer-motion';

const TestimonialsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TestimonialsSection />
    </motion.div>
  );
};

export default TestimonialsPage;
