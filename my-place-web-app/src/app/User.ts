export interface User {
    username: string;
    password: string;
    email: string;
    bio?: string;
    profilePicture?: string;
    blogPosts?: (string | { type: 'text' | 'image'; content: string })[];
    friends?: User[];
}

export interface User{
    username: string;
    password: string;
    email: string;
    bio?: string;
    profilePicture?: string;
    friends?: User[];
}


export interface Message {
    Recipients: User[];
    Sender: User;
    content: string;
    timestamp: string; 
}

export interface BlogPost {
    User:User
    content: string
    likes: number 
}

export interface UserBlogPost extends BlogPost{
    UserLike:boolean
}

  