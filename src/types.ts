export type Category = 
  | 'All'
  | 'Slow Living'
  | 'Self-Care'
  | 'Lifestyle'
  | 'Journal'
  | 'Culture'
  | 'Inspiration';

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export type ContentBlock = 
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'list'; items: string[]; title?: string }
  | { type: 'tip'; title: string; text: string }
  | { type: 'callout'; text: string }
  | { type: 'image_caption'; text: string };

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Exclude<Category, 'All'>;
  author: Author;
  date: string;
  readTime: string;
  heroImage: string;
  imageAlt: string;
  excerpt: string;
  introduction: string;
  content: ContentBlock[];
  practicalTips: string[];
  conclusion: string;
  tags: string[];
  featured?: boolean;
  relatedIds: string[];
  likesCount?: number;
}

export interface SundayMood {
  id: string;
  name: string;
  quote: string;
  author: string;
  playlistName: string;
  ritual: string;
  prompt: string;
}

export interface ReaderComment {
  id: string;
  articleId: string;
  name: string;
  date: string;
  text: string;
}
