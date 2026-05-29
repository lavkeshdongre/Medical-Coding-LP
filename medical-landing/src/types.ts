export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CurriculumTopic {
  title: string;
  items: string[];
  icon: string;
}

export interface BatchInfo {
  date: string;
  status: 'Limited Seats' | 'Filling Fast' | 'Last Few Seats';
  seatsLeft: number;
  totalSeats: number;
}

export interface LeadData {
  fullName: string;
  mobile: string;
  email: string;
  qualification: string;
  city: string;
  preferredMode: 'Online' | 'Offline';
}
