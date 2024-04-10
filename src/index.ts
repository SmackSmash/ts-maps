import { faker } from '@faker-js/faker';
import { User } from './User';
import { Company } from './Company';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const newUser = new User(faker.person.firstName(), faker.person.lastName(), {
  lat: faker.location.latitude(),
  long: faker.location.longitude()
});

const newCompany = new Company(
  faker.company.name(),
  faker.company.catchPhrase(),
  {
    lat: faker.location.latitude(),
    long: faker.location.longitude()
  }
);

const map = L.map('map', {
  center: L.latLng(0, 0),
  zoom: 3
});

const key = 'CiGw9LIjGxZdV7waZDvf';

L.tileLayer(
  `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`,
  {
    //style URL
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution:
      '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
    crossOrigin: true
  }
).addTo(map);

L.circle([faker.location.latitude(), faker.location.longitude()], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 50000
}).addTo(map);

L.circle([faker.location.latitude(), faker.location.longitude()], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 50000
}).addTo(map);
