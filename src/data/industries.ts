import { Industry } from './types';

export const industriesData = {
  sectionTitle: 'Industries We Serve',
  subtitle: 'Trusted by manufacturers and procurement teams across diverse sectors worldwide',
  industries: [
    { icon: 'Droplets', name: 'Plumbing & Sanitary', description: 'Fittings, valves, and connectors for residential and commercial plumbing systems.' },
    { icon: 'Zap', name: 'Electrical & Electronics', description: 'Terminals, connectors, and precision contacts for switchgear and wiring systems.' },
    { icon: 'Car', name: 'Automotive', description: 'Fuel system components, sensors, and hydraulic fittings for OEM and aftermarket.' },
    { icon: 'Wind', name: 'HVAC & Refrigeration', description: 'Valves, manifolds, and fittings engineered for heating, cooling, and refrigerant circuits.' },
    { icon: 'Gauge', name: 'Oil & Gas', description: 'High-pressure fittings and instrumentation components for upstream and downstream applications.' },
    { icon: 'Cpu', name: 'Instrumentation', description: 'Precision turned parts and fittings for flow meters, pressure gauges, and sensors.' },
    { icon: 'Hammer', name: 'Construction', description: 'Anchors, inserts, and structural fasteners for commercial and infrastructure projects.' },
    { icon: 'Ship', name: 'Marine', description: 'Corrosion-resistant brass components for marine hardware and offshore equipment.' },
  ] as Industry[],
};
