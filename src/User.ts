import { Mappable } from './CustomMap';

export class User implements Mappable {
  constructor(
    public firstName: string,
    public lastName: string,
    public location: { lat: number; long: number }
  ) {}

  public markerContent(): string {
    return `<h1>${this.firstName} ${this.lastName}</h1>`;
  }
}
