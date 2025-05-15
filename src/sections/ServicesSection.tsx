import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services } from '../data/services';
import * as Icons from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-secondary-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          className={`section-enter ${inView ? 'section-enter-active' : ''}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary-blue">خدماتي</span> المتميزة
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-purple mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              مجموعة من الخدمات المتخصصة في تطوير الويب وتصميم واجهات المستخدم، مع التركيز على الجودة والاحترافية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              // Safely get the icon or use a fallback
              let Icon;
              try {
                Icon = service.icon && Icons[service.icon as keyof typeof Icons]
                  ? Icons[service.icon as keyof typeof Icons]
                  : Icons.Code;
              } catch (error) {
                console.warn(`Icon ${service.icon} not found, using fallback`);
                Icon = Icons.Code;
              }

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="service-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-dark text-primary-blue">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;