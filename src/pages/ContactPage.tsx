import React from 'react';
import ContactSection from '../sections/ContactSection';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContactSection />
    </motion.div>
  );
};

export default ContactPage;
