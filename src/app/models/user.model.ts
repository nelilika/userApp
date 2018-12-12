export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public role: string;
  public age: number;
  public city: string;
  public avatarUrl: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    role: string,
    age: number,
    city: string,
    avatarUrl: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.age = age;
    this.city = city;
    this.avatarUrl = avatarUrl;
  }
}
