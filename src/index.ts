import { faker } from '@faker-js/faker';
import User from './User';

const newUser = new User(faker.person.firstName(), faker.person.lastName(), {
  lat: faker.location.latitude(),
  long: faker.location.longitude()
});

console.log(newUser.getFullName());
