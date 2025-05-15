import React from 'react';
import BlogSection from '../sections/BlogSection';
import { motion } from 'framer-motion';

const BlogPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BlogSection />
    </motion.div>
  );
};

export default BlogPage;
