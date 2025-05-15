import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { navLinks } from '../data/navLinks';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set initial dark mode state when component mounts
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.nav
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-primary-dark/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
        }`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <motion.div variants={itemVariants} className="text-xl font-bold text-white">
            <Link to="/" className="hover:text-primary-blue transition-colors duration-300">
              <span className="text-primary-blue">محمود</span> النجيلي
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  to={link.href}
                  className={`text-white/80 hover:text-primary-blue transition-colors duration-300 ${
                    location.pathname === link.href ? 'text-primary-blue' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.div variants={itemVariants}>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-white/80 hover:text-primary-blue transition-colors duration-300"
                aria-label={darkMode ? "تفعيل الوضع الفاتح" : "تفعيل الوضع المظلم"}
                title={darkMode ? "تفعيل الوضع الفاتح" : "تفعيل الوضع المظلم"}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="md:hidden">
              <button
                onClick={() => setMenuOpen(true)}
                className="p-2 text-white/80 hover:text-primary-blue transition-colors duration-300"
                aria-label="فتح القائمة"
                title="فتح القائمة"
              >
                <Menu size={24} />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <motion.button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white/80 hover:text-primary-blue transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="إغلاق القائمة"
          title="إغلاق القائمة"
        >
          <X size={24} />
        </motion.button>

        <div className="flex flex-col items-center gap-8 text-xl">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <Link
                to={link.href}
                className={`text-white/80 hover:text-primary-blue transition-colors duration-300 ${
                  location.pathname === link.href ? 'text-primary-blue' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <div className="flex gap-4">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-white/80 hover:text-primary-blue transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={darkMode ? "تفعيل الوضع الفاتح" : "تفعيل الوضع المظلم"}
              title={darkMode ? "تفعيل الوضع الفاتح" : "تفعيل الوضع المظلم"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;