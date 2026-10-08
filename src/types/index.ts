export type PageId =
  | 'home'
  | 'about'
  | 'programs'
  | 'projects'
  | 'donate'
  | 'campaigns'
  | 'impact'
  | 'volunteer'
  | 'partner'
  | 'gallery'
  | 'news'
  | 'contact'
  | 'faq'
  | 'privacy'
  | 'terms'
  | 'donation-terms';

export type Currency = 'GBP' | 'USD' | 'EUR';

export interface Campaign {
  id: string;
  title: string;
  subtitle: string;
  category: 'Emergency' | 'Food' | 'Water' | 'Health' | 'Orphans' | 'Ramadan' | 'Education';
  location: string;
  targetAmount: number;
  raisedAmount: number;
  donorsCount: number;
  daysRemaining: number;
  image: string;
  urgent?: boolean;
  zakatEligible: boolean;
  description: string;
  impactNote: string;
  keyOutputs: string[];
}

export interface Project {
  id: string;
  title: string;
  region: 'Middle East' | 'South Asia' | 'East Africa' | 'Horn of Africa' | 'Domestic / UK';
  sector: 'Water Sanitation' | 'Nutrition & Food' | 'Healthcare' | 'Education & Orphan Care' | 'Emergency Shelter' | 'Sustainable Livelihoods';
  status: 'Active' | 'Completed' | 'Urgent Funding';
  costPerUnit?: string;
  totalBudget: number;
  fundedBudget: number;
  beneficiaries: string;
  image: string;
  description: string;
  outcomes: string[];
}

export interface Program {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  stats: { label: string; value: string };
  highlights: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  category: 'Field Dispatch' | 'Press Release' | 'Impact Story' | 'Emergency Alert';
  summary: string;
  content: string[];
  readTime: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food Aid' | 'Water Projects' | 'Education' | 'Medical Care' | 'Emergency Relief' | 'Ramadan & Eid';
  location: string;
  year: string;
  image: string;
  caption: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Donations & Receipts' | 'Zakat' | '100% Policy' | 'Gift Aid' | 'Volunteering';
}

export interface DonationRecord {
  id: string;
  cause: string;
  amount: number;
  currency: Currency;
  frequency: 'one-off' | 'monthly';
  giftAid: boolean;
  isZakat: boolean;
  donorName: string;
  donorEmail: string;
  date: string;
  status: 'Completed' | 'Pending Bank Transfer';
}
