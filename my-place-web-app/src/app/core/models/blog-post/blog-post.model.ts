import { User } from '../user/user.model';

export interface BlogPost {
  username: string;
  bio: string;
  image: string;
  following: boolean;
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: User;
}

