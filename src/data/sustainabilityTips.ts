export interface SustainabilityTip {
  id: number;
  title: string;
  tagline: string;
  description: string;
  actionNote: string;
  iconName: 'Droplet' | 'ShoppingBag' | 'Zap' | 'Recycle' | 'Printer' | 'Bike';
  impactMetric: string;
}

export const SUSTAINABILITY_TIPS: SustainabilityTip[] = [
  {
    id: 1,
    title: 'Carry a Reusable Water Bottle',
    tagline: 'Hydrate without the plastic footprint',
    description: 'Keep a sturdy stainless steel or BPA-free bottle with you. Refill at campus water stations instead of buying single-use plastic packaged water.',
    actionNote: 'Eliminates an average of 150+ single-use bottles per person every semester.',
    iconName: 'Droplet',
    impactMetric: '~156 single-use bottles prevented/year',
  },
  {
    id: 2,
    title: 'Use a Reusable Bag',
    tagline: 'Refuse throwaway plastic wraps',
    description: 'Fold a lightweight cloth or canvas tote in your college backpack for canteen snacks, bookstore visits, and day-to-day purchases.',
    actionNote: 'Saves hundreds of lightweight non-biodegradable polythene bags from landfills.',
    iconName: 'ShoppingBag',
    impactMetric: '~220 polythene bags spared/year',
  },
  {
    id: 3,
    title: 'Switch Off Lights & Electronics',
    tagline: 'Cut phantom power in labs and dorms',
    description: 'Turn off monitors, lab equipment, overhead lighting, and fans when vacating classrooms, computer labs, or study corners.',
    actionNote: 'Unplug chargers and idle adapters to eliminate vampire energy drain.',
    iconName: 'Zap',
    impactMetric: '~45 kWh electricity conserved/year',
  },
  {
    id: 4,
    title: 'Segregate Waste Responsibly',
    tagline: 'Wet, dry, and recyclable sorting',
    description: 'Place clean paper, cardboard, and recyclable plastics into designated dry bins; keep food waste in organic bins to facilitate composting.',
    actionNote: 'Contaminated recyclables often end up incinerated—clean separation keeps material circular.',
    iconName: 'Recycle',
    impactMetric: '~30 kg clean recyclables diverted',
  },
  {
    id: 5,
    title: 'Reduce Unnecessary Printing',
    tagline: 'Embrace paperless workflows & digital reviews',
    description: 'Read PDFs, course notes, and assignments digitally. When printing is unavoidable, use double-sided (duplex) mode and draft ink settings.',
    actionNote: 'Saves trees, process water, and campus recycling overhead.',
    iconName: 'Printer',
    impactMetric: '~650 sheets of paper saved',
  },
  {
    id: 6,
    title: 'Walk, Cycle, or Carpool',
    tagline: 'Low-emission campus transit',
    description: 'Opt for walking between campus blocks, commuting by bicycle, or ridesharing with fellow peers from nearby metro stops and hostels.',
    actionNote: 'Clears traffic congestion around the college gates and cuts localized vehicle emissions.',
    iconName: 'Bike',
    impactMetric: '~110 kg CO₂ equivalent reduced',
  },
];
