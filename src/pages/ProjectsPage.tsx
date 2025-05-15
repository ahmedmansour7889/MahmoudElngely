import React from 'react';
import ProjectsSection from '../sections/ProjectsSection';
import { motion } from 'framer-motion';

const ProjectsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsSection />
    </motion.div>
  );
};

export default ProjectsPage;
