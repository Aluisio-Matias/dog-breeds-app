import { DogForm } from "./Views/DogForm";
import { Dog } from "./models/Dog";

const dog = Dog.buildDog({breedName: "Pomeranian"})

const dogForm = new DogForm(
  document.getElementById('root'),
  dog
);

dogForm.render();