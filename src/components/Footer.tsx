import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../data/socialLinks';
import { navLinks } from '../data/navLinks';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0F1A] pt-16 pb-6 border-t border-primary-blue/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary-blue">محمود</span> النجيلي
            </h3>
            <p className="text-white/70 mb-4">
              مطور واجهات أمامية محترف متخصص في بناء تجارب مستخدم استثنائية ومواقع ويب متميزة.
            </p>
            <div className="flex gap-4 mt-4">
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
                    className="text-white/70 hover:text-primary-blue transition-colors duration-300"
                    whileHover={{ scale: 1.2, color: '#00FFFF' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary-blue transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">خدماتي</h3>
            <ul className="space-y-2">
              <li><span className="text-white/70">✓ تصميم واجهات أمامية</span></li>
              <li><span className="text-white/70">✓ تطوير مواقع متجاوبة</span></li>
              <li><span className="text-white/70">✓ تحسين تجربة المستخدم</span></li>
              <li><span className="text-white/70">✓ ربط الواجهات بالـ APIs</span></li>
              <li><span className="text-white/70">✓ تحسين أداء المواقع</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معي</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Icons.Mail size={16} className="text-primary-blue" />
                <a href="mailto:info@example.com" className="text-white/70 hover:text-primary-blue transition-colors duration-300">
                  info@example.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icons.Phone size={16} className="text-primary-blue" />
                <a href="tel:+201234567890" className="text-white/70 hover:text-primary-blue transition-colors duration-300">
                  +20 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icons.MapPin size={16} className="text-primary-blue" />
                <span className="text-white/70">
                  القاهرة، مصر
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50">
            © {currentYear} محمود النجيلي. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;