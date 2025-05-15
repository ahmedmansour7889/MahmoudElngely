import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/skills';
import * as Icons from 'lucide-react';

const AboutSection: React.FC = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-secondary-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          className={`section-enter ${inView ? 'section-enter-active' : ''}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary-blue">من</span> أنا
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-purple mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="w-full h-[400px] rounded-xl overflow-hidden relative"
                >
                  <img
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="محمود النجيلي"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-50"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-primary-dark p-4 rounded-lg shadow-lg"
                >
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary-blue"></div>
                    <div className="w-3 h-3 rounded-full bg-primary-purple"></div>
                    <div className="w-3 h-3 rounded-full bg-accent-1"></div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -top-6 -right-6 glass p-4 rounded-lg"
                >
                  <p className="text-primary-blue font-bold">+4 سنوات خبرة</p>
                </motion.div>
              </div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-2xl font-bold mb-4"
              >
                مطور واجهات أمامية محترف
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-white/80 mb-6 leading-relaxed"
              >
                أنا مطور واجهات أمامية أعمل بشغف على بناء مواقع وتطبيقات سريعة، تفاعلية، ومتجاوبة.
                أجيد HTML, CSS, JavaScript, React.js، وأهتم كثيرًا بتجربة المستخدم والتصميم الحديث.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-white/80 mb-8"
              >
                أسعى دائماً لمواكبة أحدث التقنيات والاتجاهات في مجال تطوير الويب، وأركز على تقديم حلول مبتكرة
                تجمع بين الجمال البصري والأداء العالي لتحقيق أفضل النتائج لعملائي.
              </motion.p>

              <div className="mb-10">
                <h4 className="text-xl font-bold mb-4">مهاراتي</h4>
                <div className="space-y-4">
                  {skills.map((skill, index) => {
                    // Safely get the icon or use a fallback
                    let Icon;
                    try {
                      Icon = skill.icon && Icons[skill.icon as keyof typeof Icons]
                        ? Icons[skill.icon as keyof typeof Icons]
                        : Icons.Code;
                    } catch (error) {
                      console.warn(`Icon ${skill.icon} not found, using fallback`);
                      Icon = Icons.Code;
                    }

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                      >
                        <div className="flex justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <Icon size={16} className="text-primary-blue" />
                            <span>{skill.name}</span>
                          </div>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="skill-progress-bar">
                          <motion.div
                            className="skill-progress-fill"
                            initial={{ scaleX: 0 }}
                            animate={inView ? { scaleX: skill.level / 100 } : { scaleX: 0 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex gap-4"
              >
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-btn"
                >
                  <span>عرض السيرة الذاتية</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;