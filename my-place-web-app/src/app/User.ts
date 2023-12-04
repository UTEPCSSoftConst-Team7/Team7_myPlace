export interface User {
  username: string;
  password: string;
  email: string;
  bio?: string;
  profilePicture?: string;
  blogPosts?: (string | { type: 'text' | 'image'; content: string })[];
  friends?: String[];
  closeFriend: String[];
  Blocked: String[];
}

export interface Users {
  username: string;
  password: string;
  email: string;
  bio?: string;
  profilePicture?: string;
  friends?: User[];
  closeFriend: string[];
  Blocked: string[];
}


export interface Conversation  {
  participants: String[];
  messages: Messages[]
}

export interface Messages{
  sender: String;
  content: string;
  timestamp: string;
}

export interface BlogPost {
  user: string;
  content: string;
  likes: number;
  CloseFriend: boolean;
}

export interface UserBlogPost extends BlogPost {
  UserLike: boolean;
  CloseFriend: boolean;
}
