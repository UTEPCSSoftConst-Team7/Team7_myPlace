export interface User {
  username: string;
  password: string;
  email: string;
  bio?: string;
  profilePicture?: string;
  blogPosts?: (string | { type: 'text' | 'image'; content: string })[];
  friends?: User[];
  token?: string;
  following?: boolean;
}
