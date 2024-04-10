import { faker } from '@faker-js/faker';
import { User } from './User';
import { Company } from './Company';
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
