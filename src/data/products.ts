import { Product } from './types';

export const productsData = {
  sectionTitle: 'Our Product Range',
  subtitle: 'Precision-engineered brass components for every industrial application',
  viewAllLink: { label: 'View All Products', href: '#products' },
  products: [
    {
      id: 'brass-fittings',
      name: 'Brass Compression Fittings',
      tags: ['Bestseller', 'Export Ready'],
      specs: ['Material: CW617N Brass', 'Sizes: 1/8" – 2"', 'Pressure: up to 25 bar', 'Finish: Natural / Nickel'],
      isFeatured: true,
      viewDetailsHref: '#contact',
    },
    {
      id: 'brass-valves',
      name: 'Brass Ball Valves',
      tags: ['Bestseller'],
      specs: ['Material: CW617N Brass', 'Sizes: DN8 – DN50', 'Pressure: PN40', 'End: BSP / NPT'],
      isFeatured: true,
      viewDetailsHref: '#contact',
    },
    {
      id: 'brass-inserts',
      name: 'Brass Threaded Inserts',
      tags: ['New'],
      specs: ['Thread: M3 – M16', 'Material: Free Machining Brass', 'Drive: Knurled / Hex', 'Standard: DIN 16903'],
      isFeatured: false,
      viewDetailsHref: '#contact',
    },
    {
      id: 'brass-connectors',
      name: 'Brass Push-Fit Connectors',
      tags: ['New'],
      specs: ['Pipe OD: 6mm – 28mm', 'Material: DZR Brass', 'Seal: EPDM O-ring', 'Temp: -20°C to 110°C'],
      isFeatured: false,
      viewDetailsHref: '#contact',
    },
    {
      id: 'brass-terminals',
      name: 'Brass Electrical Terminals',
      tags: ['Export Ready'],
      specs: ['Conductivity: 28% IACS', 'Plating: Tin / Silver', 'Wire Range: 0.5 – 35mm²', 'Standard: IEC 60947'],
      isFeatured: false,
      viewDetailsHref: '#contact',
    },
    {
      id: 'brass-turned-parts',
      name: 'Custom CNC Turned Parts',
      tags: ['Custom'],
      specs: ['Tolerance: ±0.01mm', 'Alloy: As per drawing', 'Batch: 100 – 1M pcs', 'Lead Time: 3–4 weeks'],
      isFeatured: false,
      viewDetailsHref: '#contact',
    },
  ] as Product[],
};
