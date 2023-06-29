import { Dog } from "./models/Dog";

const dog = new Dog({
  breedName: 'German Shepard',
  scientificName: 'Canis lupus familiaris',
  coolName: 'Chase',
  temperament: 'Inteligent',
  lifeSpan: '9-13 years',
  dailySleep: '12-14 years',
  gestationPeriod: '63 days'
});

dog.set({coolName: 'Wolf', temperament: 'Smart, active'})

console.log(dog.get('breedName'));
console.log(dog.get('scientificName'));
console.log(dog.get('coolName'));
console.log(dog.get('temperament'));
console.log(dog.get('lifeSpan'));
console.log(dog.get('dailySleep'));
console.log(dog.get('gestationPeriod'));

dog.on('change', () => {
  console.log('change #1')
})

dog.on('change', () => {
  console.log('change #2')
})

dog.on('click', () => {
  console.log('click')
})

dog.on('save', () => {
  console.log('Saved!')
})

dog.trigger('save');