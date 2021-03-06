import { Message } from './Message';
export interface User{
  _id?: string;
  lastName: string;
  firstName: string;
  userName: string;
  email: string;
  password?: string;
  lastMessage?: Message;
}
