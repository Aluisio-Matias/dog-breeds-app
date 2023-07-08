import { Dog, DogProps } from '../models/Dog';
import { View } from './View';

export class DogForm extends View<Dog, DogProps> {
  
  eventsMap(): {[key: string]: () => void} {
    return {
      'click:.set-name': this.onSetNameClick
    }
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    //type guard
    if (input) {
      const breedName = input.value;
      this.model.set({ breedName })
    }
  };
  
  template(): string {
    return `
    <div>
      <h1>Dog Form</h1>
      <div>Breed name: ${this.model.get("breedName")}</div>
      <input />
      <button class="set-name">Update Name</button>
    </div>
    `;
  };

  
};