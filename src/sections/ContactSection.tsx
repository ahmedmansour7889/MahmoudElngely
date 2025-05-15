import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { socialLinks } from '../data/socialLinks';
import { Send, Check, AlertCircle } from 'lucide-react';
import * as Icons from 'lucide-react';

const ContactSection: React.FC = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      if (Math.random() > 0.2) { // 80% success rate for demo
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-primary-dark relative overflow-hidden">
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
              <span className="text-primary-blue">تواصل</span> معي
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-purple mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              هل لديك مشروع تود مناقشته؟ أو استفسار؟ لا تتردد في التواصل معي وسأرد عليك في أقرب وقت ممكن.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-secondary-dark flex items-center justify-center text-primary-blue">
                      <Icons.Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">البريد الإلكتروني</h4>
                      <a href="mailto:info@example.com" className="text-white/70 hover:text-primary-blue transition-colors duration-300">
                        info@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-secondary-dark flex items-center justify-center text-primary-blue">
                      <Icons.Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">رقم الهاتف</h4>
                      <a href="tel:+201234567890" className="text-white/70 hover:text-primary-blue transition-colors duration-300">
                        +20 123 456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-secondary-dark flex items-center justify-center text-primary-blue">
                      <Icons.MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">العنوان</h4>
                      <p className="text-white/70">
                        القاهرة، مصر
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold mb-4">تواصل معي عبر</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => {
                    // Safely get the icon or use a fallback
                    let Icon;
                    try {
                      Icon = link.icon && Icons[link.icon as keyof typeof Icons]
                        ? Icons[link.icon as keyof typeof Icons]
                        : Icons.Link;
                    } catch (error) {
                      console.warn(`Icon ${link.icon} not found, using fallback`);
                      Icon = Icons.Link;
                    }

                    return (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-secondary-dark flex items-center justify-center text-white/80 hover:text-primary-blue transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon size={18} />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="glass p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-6">أرسل رسالة</h3>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-white/80 mb-2">الاسم</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="الاسم الكامل"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-white/80 mb-2">البريد الإلكتروني</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="example@domain.com"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white/80 mb-2">الرسالة</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="form-input"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="neon-btn w-full flex items-center justify-center gap-2"
                  >
                    <span>
                      {formStatus === 'idle' && 'إرسال الرسالة'}
                      {formStatus === 'submitting' && 'جاري الإرسال...'}
                      {formStatus === 'success' && 'تم الإرسال بنجاح!'}
                      {formStatus === 'error' && 'حدث خطأ، حاول مرة أخرى'}
                    </span>
                    {formStatus === 'idle' && <Send size={16} />}
                    {formStatus === 'submitting' && (
                      <div className="animate-spin w-4 h-4 border-2 border-white rounded-full border-t-transparent"></div>
                    )}
                    {formStatus === 'success' && <Check size={16} />}
                    {formStatus === 'error' && <AlertCircle size={16} />}
                  </button>

                  {formStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 text-center text-green-400"
                    >
                      شكراً لتواصلك معي! سأرد عليك في أقرب وقت ممكن.
                    </motion.p>
                  )}

                  {formStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 text-center text-red-400"
                    >
                      حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقاً.
                    </motion.p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;