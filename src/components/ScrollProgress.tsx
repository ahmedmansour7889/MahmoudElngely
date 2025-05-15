import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      setScrollPercentage(value);
    });
    
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <motion.div 
      className="scroll-progress"
      style={{ width: `${scrollPercentage * 100}%` }}
    />
  );
};

export default ScrollProgress;