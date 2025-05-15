import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { blogPosts } from '../data/blogPosts';
import { Calendar } from 'lucide-react';

const BlogSection: React.FC = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="blog" className="py-20 bg-secondary-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          className={`section-enter ${inView ? 'section-enter-active' : ''}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary-blue">المدونة</span> التقنية
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-purple mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              آخر المقالات والأفكار حول تطوير الويب وتصميم واجهات المستخدم وأحدث التقنيات.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="blog-card"
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-70"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-white/70 mb-3">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-white/70 mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  <a 
                    href={post.url} 
                    className="text-primary-blue hover:text-primary-purple transition-colors duration-300"
                  >
                    اقرأ المزيد &larr;
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <a 
              href="/blog" 
              className="neon-btn inline-block"
            >
              <span>عرض جميع المقالات</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;