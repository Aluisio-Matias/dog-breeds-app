import { DogForm } from "./Views/DogForm";
import { Dog } from "./models/Dog";

const dog = Dog.buildDog({breedName: "Pomeranian"});
const root = document.getElementById('root')

//type guard to fix TS error
if (root) {
  const dogForm = new DogForm(root, dog);
  dogForm.render();
} else {
  throw new Error('Root element not found!');
};
