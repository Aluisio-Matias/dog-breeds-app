
import { Dog } from "./models/Dog";

const dbURL = 'http://localhost:3000/dogs';

const dog = new Dog({id: 1, breedName: 'G Shep'})

dog.on('save', () => {
  console.log(dog)
})

dog.save();