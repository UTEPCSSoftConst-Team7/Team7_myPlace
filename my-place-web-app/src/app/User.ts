export interface User {
    username: string;
    password: string;
    email: string;
    bio?: string;
    profilePicture?: string;
    blogPosts?: (string | { type: 'text' | 'image'; content: string })[];
    friends?: User[];
}



export interface Message {
    sender: string;
    content: string;
    type: 'text' | 'image';
    imageUrl?: string; 
    timestamp: string; 
}
  