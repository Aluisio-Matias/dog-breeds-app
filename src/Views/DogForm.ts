import { Dog, DogProps } from '../models/Dog';
import { View } from './View';

export class DogForm extends View<Dog, DogProps> {
  
  eventsMap(): {[key: string]: () => void} {
    return {
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick
    }
  };

  onSaveClick = (): void => {
    this.model.save();
  }

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
      <input placeholder="${this.model.get('breedName')}" />
      <button class="set-name">Update Name</button>
      <button class="save-model">Save Dog</button>
    </div>
    `;
  };

  
};