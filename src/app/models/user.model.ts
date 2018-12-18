import { ISkills } from "./skills.model";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  age: number;
  city: string;
  avatarUrl: string;
  skills: Array<ISkills>;
  about: string;
}
