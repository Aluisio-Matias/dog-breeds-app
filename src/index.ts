import { Dog } from "./models/Dog";

const dog = Dog.buildDog({id: 3})

dog.on('change', () => {
  console.log(dog)
})

dog.fetch();