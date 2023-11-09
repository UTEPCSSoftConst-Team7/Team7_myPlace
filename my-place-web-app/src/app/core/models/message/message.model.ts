export interface Message {
  sender: string;
  content: string;
  type: 'text' | 'image';
  imageUrl?: string;
  timestamp: string;
}
