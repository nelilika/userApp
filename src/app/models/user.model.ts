export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  age: number;
  city: string;
  avatarUrl: string;
  skills: Array<string>;
  about: string;
}
