import axios from "axios";
import { Dog } from "./models/Dog";

const dbURL = 'http://localhost:3000/dogs';

axios.post(dbURL, {
  breedName: 'German Shepard',
  scientificName: 'Canis lupus familiaris',
  temperament: 'Inteligent',
  lifeSpan: '9-13 years',
  dailySleep: '12-14 years',
  gestationPeriod: '63 days'
});

axios.get(`${dbURL}/1`)

const dog = new Dog({
  breedName: 'Boder Collie',
  scientificName: 'unknown',
  temperament: 'Active',
  lifeSpan: '9-13 years',
  dailySleep: '12-14 years',
  gestationPeriod: '63 days'
})

dog.save();
dog.events.on('change', () => {
  console.log('change!')
});
dog.events.trigger('change');