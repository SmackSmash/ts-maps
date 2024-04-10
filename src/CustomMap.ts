import L from 'leaflet';
import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  private leafletMap: L.Map;

  constructor(elementId: string) {
    this.leafletMap = L.map(elementId, {
      center: L.latLng(0, 0),
      zoom: 3
    });

    const key = 'CiGw9LIjGxZdV7waZDvf';

    L.tileLayer(
      `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`,
      {
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        attribution:
          '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
        crossOrigin: true
      }
    ).addTo(this.leafletMap);
  }

  public addMarker(user: User | Company) {
    L.marker([user.location.lat, user.location.long]).addTo(this.leafletMap);
  }
}
