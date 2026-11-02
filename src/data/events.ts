export interface EventItem {
  id: string;
  title: string;
  category: 'upcoming' | 'ongoing' | 'past';
  tagline: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  statusText: string;
  registrationStatus: 'opening_soon' | 'open' | 'closed';
  iconType: 'treasure' | 'hackathon' | 'general';
  theme: string;
  format: string;
  eligibility: string;
  keyHighlights: string[];
}

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'eco-treasure-hunt',
    title: 'Eco Treasure Hunt',
    category: 'upcoming',
    tagline: 'Unravel riddles, trace green clues, and master sustainability.',
    description:
      'Follow the clues, solve eco-themed challenges, and discover how small sustainable actions can make a big difference. Team up with fellow students for a fun, interactive environmental adventure across campus.',
    date: 'To Be Announced Soon',
    time: 'To Be Announced',
    venue: 'To Be Announced (Campus Wide)',
    statusText: 'Dates to be announced soon',
    registrationStatus: 'opening_soon',
    iconType: 'treasure',
    theme: 'Campus Ecology, Biodiversity & Waste Mapping',
    format: 'Team-based interactive quest (3-4 members per squad)',
    eligibility: 'Open to all ABES Engineering College students across all departments & years',
    keyHighlights: [
      'Interactive clue checkpoints placed across campus green spots',
      'Hands-on micro-challenges focusing on waste sorting and plant identification',
      'Teamwork and problem-solving under dynamic sustainability scenarios',
      'Exciting eco-hampers and certificates of excellence for top finishers',
    ],
  },
  {
    id: 'eco-hackathon',
    title: 'Eco Hackathon',
    category: 'upcoming',
    tagline: 'Code greener algorithms, engineer cleaner hardware, and pitch sustainable futures.',
    description:
      'Bring your creativity, technical skills, and sustainability ideas together to design innovative solutions for real-world environmental challenges. Collaborate, prototype, and build for a greener tomorrow.',
    date: 'To Be Announced Soon',
    time: 'To Be Announced',
    venue: 'To Be Announced (ABES Innovation Center)',
    statusText: 'Dates to be announced soon',
    registrationStatus: 'opening_soon',
    iconType: 'hackathon',
    theme: 'CleanTech, Smart Campus Energy, IoT for Environment & Circular Economy',
    format: 'Hackathon & Rapid Prototyping Showcase',
    eligibility: 'Open to all ABES EC engineering & technology students',
    keyHighlights: [
      'Problem statements spanning smart energy conservation, campus recycling & AI for carbon tracking',
      'Mentorship sessions with tech leads and faculty guides',
      'Prototype demonstrations to technical judges and faculty panelists',
      'Recognition, commendation letters, and opportunities to incubate working solutions',
    ],
  },
];
