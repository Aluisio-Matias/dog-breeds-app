import axios from "axios";

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

