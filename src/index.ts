import { Dog } from "./models/Dog";

const collection = Dog.buildDogCollection();

collection.on('change', () =>{
  console.log(collection)
})

collection.fetch();