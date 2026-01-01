export interface StoryConfig {
  childName: string;
  gender: 'boy' | 'girl' | 'neutral';
  theme: string;
  lesson: string;
}

export interface UploadedImage {
  file: File;
  previewUrl: string;
}

export enum AppRoutes {
  HOME = '/',
  PREVIEW = '/preview',
  DIRECTOR = '/director',
  EDITOR = '/editor',
  LOGIN = '/auth/login',
  SIGNUP = '/auth/signup',
  DASHBOARD = '/dashboard',
  CHECKOUT = '/checkout',
}

export interface ThemeOption {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name or image url
}

export interface LessonOption {
  id: string;
  title: string;
}

export interface Book {
  id: string;
  title: string;
  coverImage: string;
  status: 'draft' | 'ordered' | 'shipped';
  lastEdited: Date;
}