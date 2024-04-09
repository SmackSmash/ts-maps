export class Company {
  constructor(
    public name: string,
    public catchPhrase: string,
    public location: { lat: number; long: number }
  ) {}
}
