export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public location: { lat: number; long: number }
  ) {}

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
