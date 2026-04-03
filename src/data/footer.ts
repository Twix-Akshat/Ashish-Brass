import { FooterData } from './types';

export const footerData: FooterData = {
  companyName: 'Ashish Brass',
  tagline: 'Precision Brass Components, Engineered for the World',
  address: 'GIDC Sakar-2, Jamnagar – 361 004, Gujarat, India',
  phone: '+91 98765 43210',
  email: 'sales@ashishbrass.com',
  businessHours: 'Mon – Sat: 9:00 AM – 6:00 PM IST',
  linkColumns: [
    {
      heading: 'Products',
      links: [
        { label: 'Brass Fittings', href: '#products' },
        { label: 'Ball Valves', href: '#products' },
        { label: 'Threaded Inserts', href: '#products' },
        { label: 'Push-Fit Connectors', href: '#products' },
        { label: 'Electrical Terminals', href: '#products' },
        { label: 'CNC Turned Parts', href: '#products' },
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
        { label: 'Get a Quote', href: '#contact' },
        { label: 'Technical Support', href: '#contact' },
        { label: 'Careers', href: '#contact' },
      ],
    },
  ],
};
