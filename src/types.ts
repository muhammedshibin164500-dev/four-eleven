export type ServiceCategory = 'all' | 'performance' | 'detailing' | 'maintenance' | 'bodywork';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  shortDesc: string;
  fullDesc: string;
  turnaround: string;
  warranty: string;
  startingPrice: string;
  icon: string;
  features: string[];
  equipment: string[];
  image: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  vehicle: string;
  category: 'supercars' | 'detailing' | 'performance' | 'classics';
  image: string;
  beforeImage?: string;
  tags: string[];
  specs: {
    power?: string;
    treatment?: string;
    turnaround?: string;
    parts?: string;
  };
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  vehicle: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatar: string;
  serviceUsed: string;
}

export interface BookingSubmission {
  referenceId: string;
  customerName: string;
  email: string;
  phone: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  serviceId: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  valetPickup: boolean;
  notes: string;
  estimatedTotal: string;
  createdAt: string;
}
