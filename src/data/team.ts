export interface TeamMember {
  id: string;
  name: string;
  role: string;
  division: string;
  divisionCategory: 'counselor' | 'leadership' | 'tech' | 'event' | 'social' | 'pr' | 'creative' | 'registration';
  isTBA?: boolean;
  highlight?: boolean;
}

export interface DivisionInfo {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const DIVISIONS: Record<string, DivisionInfo> = {
  counselor: {
    id: 'counselor',
    title: 'Faculty Counselors',
    description: 'Guiding institutional vision, mentor support, and academic alignment for campus sustainability.',
    iconName: 'GraduationCap',
  },
  leadership: {
    id: 'leadership',
    title: 'Core Leadership',
    description: 'Directing strategic initiatives, club governance, and multi-division coordination.',
    iconName: 'Crown',
  },
  tech: {
    id: 'tech',
    title: 'Tech & Project Division',
    description: 'Building software tools, digital portals, hardware prototypes, and technology-driven eco solutions.',
    iconName: 'Code2',
  },
  event: {
    id: 'event',
    title: 'Event & Management Division',
    description: 'Orchestrating workshops, campus drives, environmental hackathons, and logistics.',
    iconName: 'CalendarCheck',
  },
  social: {
    id: 'social',
    title: 'Social Media & Content Division',
    description: 'Crafting digital storytelling, awareness campaigns, and visual communications across platforms.',
    iconName: 'Share2',
  },
  pr: {
    id: 'pr',
    title: 'PR & Outreach Division',
    description: 'Fostering inter-college collaborations, industry partnerships, and campus-wide advocacy.',
    iconName: 'Megaphone',
  },
  creative: {
    id: 'creative',
    title: 'Creative & Decor Division',
    description: 'Creating eco-friendly aesthetic designs, recycled stage decor, posters, and sustainable installations.',
    iconName: 'Palette',
  },
  registration: {
    id: 'registration',
    title: 'Registration Division',
    description: 'Managing participant onboarding, event ticketing, member records, and helpdesk operations.',
    iconName: 'ClipboardList',
  },
};

export const TEAM_MEMBERS: TeamMember[] = [
  // Faculty Counselors
  {
    id: 'abhishek-shukla',
    name: 'Mr. Abhishek Shukla',
    role: 'Faculty Counselor',
    division: 'Faculty Counselors',
    divisionCategory: 'counselor',
    highlight: true,
  },
  {
    id: 'divyanshi-sharma',
    name: 'Dr. Divyanshi Sharma',
    role: 'Faculty Counselor',
    division: 'Faculty Counselors',
    divisionCategory: 'counselor',
    highlight: true,
  },

  // Core Leadership
  {
    id: 'abhinav-kumar',
    name: 'Abhinav Kumar',
    role: 'General Secretary',
    division: 'Core Leadership',
    divisionCategory: 'leadership',
    highlight: true,
  },
  {
    id: 'shaurya-pratap-singh',
    name: 'Shaurya Pratap Singh',
    role: 'Joint Secretary',
    division: 'Core Leadership',
    divisionCategory: 'leadership',
    highlight: true,
  },
  {
    id: 'treasurer-tba',
    name: 'Treasurer',
    role: 'To Be Announced',
    division: 'Core Leadership',
    divisionCategory: 'leadership',
    isTBA: true,
  },

  // Tech & Project Division
  {
    id: 'sarthak-mishra',
    name: 'Sarthak Mishra',
    role: 'Head',
    division: 'Tech & Project Division',
    divisionCategory: 'tech',
  },
  {
    id: 'himanshu-yadav',
    name: 'Himanshu Yadav',
    role: 'Core Team',
    division: 'Tech & Project Division',
    divisionCategory: 'tech',
  },
  {
    id: 'tanishque-tyagi',
    name: 'Tanishque Tyagi',
    role: 'Core Team',
    division: 'Tech & Project Division',
    divisionCategory: 'tech',
  },

  // Event & Management Division
  {
    id: 'adarsh-singh',
    name: 'Adarsh Singh',
    role: 'Core Team',
    division: 'Event & Management Division',
    divisionCategory: 'event',
  },
  {
    id: 'raj-kurele',
    name: 'Raj Kurele',
    role: 'Core Team',
    division: 'Event & Management Division',
    divisionCategory: 'event',
  },
  {
    id: 'shatakshi-chauhan',
    name: 'Shatakshi Chauhan',
    role: 'Core Team',
    division: 'Event & Management Division',
    divisionCategory: 'event',
  },

  // Social Media & Content Division
  {
    id: 'shivam-gupta',
    name: 'Shivam Gupta',
    role: 'Core Team',
    division: 'Social Media & Content Division',
    divisionCategory: 'social',
  },
  {
    id: 'sachin',
    name: 'Sachin',
    role: 'Core Team',
    division: 'Social Media & Content Division',
    divisionCategory: 'social',
  },
  {
    id: 'srajan-gupta',
    name: 'Srajan Gupta',
    role: 'Core Team',
    division: 'Social Media & Content Division',
    divisionCategory: 'social',
  },

  // PR & Outreach Division
  {
    id: 'ashwin-pratap-singh',
    name: 'Ashwin Pratap Singh',
    role: 'Core Team',
    division: 'PR & Outreach Division',
    divisionCategory: 'pr',
  },
  {
    id: 'saraswati-singh',
    name: 'Saraswati Singh',
    role: 'Core Team',
    division: 'PR & Outreach Division',
    divisionCategory: 'pr',
  },

  // Creative & Decor Division
  {
    id: 'shivendra-singh-baghel',
    name: 'Shivendra Singh Baghel',
    role: 'Core Team',
    division: 'Creative & Decor Division',
    divisionCategory: 'creative',
  },
  {
    id: 'niyati-kharbanda',
    name: 'Niyati Kharbanda',
    role: 'Core Team',
    division: 'Creative & Decor Division',
    divisionCategory: 'creative',
  },

  // Registration Division
  {
    id: 'ujjwal-singh',
    name: 'Ujjwal Singh',
    role: 'Core Team',
    division: 'Registration Division',
    divisionCategory: 'registration',
  },
  {
    id: 'anand-rai',
    name: 'Anand Rai',
    role: 'Core Team',
    division: 'Registration Division',
    divisionCategory: 'registration',
  },
];
