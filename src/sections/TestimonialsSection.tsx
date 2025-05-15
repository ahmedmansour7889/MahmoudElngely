import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { testimonials } from '../data/testimonials';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-primary-dark relative overflow-hidden">
      <div className="animated-bg" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          className={`section-enter ${inView ? 'section-enter-active' : ''}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary-blue">آراء</span> العملاء
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-purple mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              ما يقوله العملاء عن تجربتهم في العمل معي وعن جودة الخدمات المقدمة.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(${current * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`min-w-full flex justify-center px-4 ${
                        index === current ? 'opacity-100' : 'opacity-50'
                      }`}
                    >
                      <div className={`testimonial-card ${index === current ? 'active' : ''}`}>
                        <div className="mb-6 flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full overflow-hidden">
                              <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold">{testimonial.name}</h4>
                              <p className="text-white/70 text-sm">{testimonial.position}</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={i < testimonial.stars ? 'text-yellow-400' : 'text-gray-600'}
                                fill={i < testimonial.stars ? '#FACC15' : 'none'}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-white/80 italic">"{testimonial.text}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={prev}
                className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary-dark flex items-center justify-center text-white hover:text-primary-blue transition-colors duration-300"
                aria-label="الشهادة السابقة"
                title="الشهادة السابقة"
              >
                <ChevronRight size={20} />
              </button>

              <button
                onClick={next}
                className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary-dark flex items-center justify-center text-white hover:text-primary-blue transition-colors duration-300"
                aria-label="الشهادة التالية"
                title="الشهادة التالية"
              >
                <ChevronLeft size={20} />
              </button>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrent(index);
                  }}
                  className={`w-3 h-3 rounded-full ${
                    index === current ? 'bg-primary-blue' : 'bg-gray-600'
                  }`}
                  aria-label={`الانتقال إلى شهادة ${testimonial.name}`}
                  title={`الانتقال إلى شهادة ${testimonial.name}`}
                  aria-current={index === current ? 'true' : 'false'}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;