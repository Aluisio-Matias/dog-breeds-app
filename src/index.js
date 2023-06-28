"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dog_1 = require("./models/Dog");
var dog = new Dog_1.Dog({
    breedName: 'German Shepard',
    scientificName: 'Canis lupus familiaris',
    coolName: 'Chase',
    temperament: 'Inteligent',
    lifeSpan: '9-13 years',
    dailySleep: '12-14 years',
    gestationPeriod: '63 days'
});
dog.set({ coolName: 'Wolf', temperament: 'Smart, active' });
console.log(dog.get('breedName'));
console.log(dog.get('scientificName'));
console.log(dog.get('coolName'));
console.log(dog.get('temperament'));
console.log(dog.get('lifeSpan'));
console.log(dog.get('dailySleep'));
console.log(dog.get('gestationPeriod'));
