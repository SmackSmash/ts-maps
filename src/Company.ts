import { Mappable } from './CustomMap';

export class Company implements Mappable {
  constructor(
    public name: string,
    public catchPhrase: string,
    public location: { lat: number; long: number }
  ) {}

  public markerContent(): string {
    return `<h1>${this.name}</h1><p>${this.catchPhrase}</p>`;
  }
}
