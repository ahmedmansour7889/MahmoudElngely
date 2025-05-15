import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'منصة تعليم إلكتروني',
    description: 'منصة متكاملة للتعليم الإلكتروني مع نظام إدارة المحتوى وتتبع تقدم الطلاب',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'تطبيق متجر إلكتروني',
    description: 'منصة للتجارة الإلكترونية مع سلة مشتريات وبوابة دفع آمنة',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Next.js', 'Stripe', 'Tailwind CSS', 'Supabase'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'تطبيق إدارة المهام',
    description: 'تطبيق لإدارة المهام والمشاريع مع ميزات السحب والإفلات وتتبع الوقت',
    image: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Vue.js', 'Firebase', 'Vuetify', 'PWA'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'موقع شركة استشارات',
    description: 'موقع احترافي لشركة استشارات مع حجز المواعيد ونظام المدونة',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Gatsby', 'GraphQL', 'Contentful'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  }
];