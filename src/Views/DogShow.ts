import { View } from "./View";
import { Dog, DogProps } from "../models/Dog";

export class DogShow extends View<Dog, DogProps> {
  template(): string {
    return `
    <div>
      <h1>Dog Detail</h1>
      <div>User Name: ${this.model.get('breedName')}</div>
      <div>Lifespan: ${this.model.get('lifeSpan')}</div>
    </div>
    `;
  }
}