import { User } from '../user/user.model';

export interface Comment {
  id: string;
  body: string;
  createdAt: string;
  author: User;
}
