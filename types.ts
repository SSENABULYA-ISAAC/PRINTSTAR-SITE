import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum NavSection {
  HOME = 'home',
  SERVICES = 'services',
  GALLERY = 'gallery',
  TEAM = 'team',
  CONTACT = 'contact'
}