import { Product } from './types';

export const productsData = {
  sectionTitle: 'Our Product Range',
  subtitle: 'Custom-designed brass components engineered for superior performance and reliability',
  viewAllLink: { label: 'View All Products', href: '#contact' },
  products: [
    {
      id: 'brass-battery-terminals',
      name: 'Brass Battery Terminals',
      tags: ['Bestseller', 'Export Ready'],
      specs: ['Custom Designed', 'Best Finish', 'Corrosion Free', 'Every Size Available'],
      isFeatured: true,
      viewDetailsHref: '#contact',
    },
    {
      id: 'brass-auto-parts',
      name: 'Brass Auto Parts',
      tags: ['Bestseller'],
      specs: ['Precision Engineered', 'OEM & Aftermarket', 'Quality Assured', 'Competitive Pricing'],
      isFeatured: true,
      viewDetailsHref: '#contact',
    },
    {
      id: 'brass-cable-lugs',
      name: 'Brass & Copper Cable Lugs',
      tags: ['Export Ready'],
      specs: ['Electrical Grade', 'Full Range Available', 'Corrosion Resistant', 'Fast Delivery'],
      isFeatured: true,
      viewDetailsHref: '#contact',
    },
    {
      id: 'brass-inserts',
      name: 'Brass Inserts & Fasteners',
      tags: ['Available'],
      specs: ['Brass Nuts & Bolts', 'Cable Glands', 'Electrical Components', 'Custom Sizes'],
      isFeatured: false,
      viewDetailsHref: '#contact',
    },
    {
      id: 'brass-electrical',
      name: 'Brass Electrical Parts',
      tags: ['Available'],
      specs: ['Lighting Elements', 'Shaping Elements', 'GAS Parts', 'Certified Quality'],
      isFeatured: false,
      viewDetailsHref: '#contact',
    },
    {
      id: 'brass-mixer-parts',
      name: 'Brass Mixer Parts',
      tags: ['Custom'],
      specs: ['Sanitary Grade', 'Precision Machined', 'Professional Grade', 'Custom Designs'],
      isFeatured: false,
      viewDetailsHref: '#contact',
    },
  ] as Product[],
};
