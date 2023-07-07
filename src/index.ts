import { Collection } from "./models/Collection";
import { Dog, DogProps } from "./models/Dog";

const collection = new Collection<Dog, DogProps>(
  'http://localhost:3000/dogs',
  (json: DogProps) => Dog.buildDog(json)
);

collection.on('change', () =>{
  console.log(collection)
})

collection.fetch();