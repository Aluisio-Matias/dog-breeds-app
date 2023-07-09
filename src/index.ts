import { DogList } from "./Views/DogList";
import { Collection } from "./models/Collection";
import { Dog, DogProps } from "./models/Dog";

const dogs = new Collection('http://localhost:3000/dogs', 
  (json: DogProps) => {
    return Dog.buildDog(json);
});

dogs.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new DogList(root, dogs).render();
  }
});

dogs.fetch();