import { FooterData } from './types';

export const footerData: FooterData = {
  companyName: 'Ashish Brass Industries',
  tagline: 'Premium Brass Components for Global Industries',
  address: 'C-305, Opp. Police Chawki, Shankar Tekri, Jamnagar – 361004, Gujarat, India',
  phone: '+91-9328101335 / +91-8320897541',
  email: 'kdp1971@gmail.com',
  businessHours: 'Mon – Sat: 9:00 AM – 6:00 PM IST',
  linkColumns: [
    {
      heading: 'Products',
      links: [
        { label: 'Brass Battery Terminals', href: '#products' },
        { label: 'Brass Auto Parts', href: '#products' },
        { label: 'Cable Lugs', href: '#products' },
        { label: 'Brass Inserts', href: '#products' },
        { label: 'Electrical Parts', href: '#products' },
        { label: 'Mixer Parts', href: '#products' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Industries', href: '#industries' },
        { label: 'Quality & Certifications', href: '#about' },
        { label: 'Export Capabilities', href: '#about' },
      ],
    },
    {
      heading: 'Contact',
      links: [
        { label: 'View Products', href: '/products' },
        { label: 'Browse All', href: '#industries' },
        { label: 'Contact Us', href: '#contact' },
      ],
    },
  ],
};
