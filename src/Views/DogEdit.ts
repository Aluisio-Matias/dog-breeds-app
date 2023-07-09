import { View } from "./View";
import { Dog, DogProps } from "../models/Dog";
import { DogForm } from "./DogForm";
import { DogShow } from "./DogShow";

export class DogEdit extends View<Dog, DogProps> {
  regionsMap(): { [key: string]: string } {
    return {
      dogShow: '.dog-show',
      dogForm: '.dog-form'
    }
  };

  onRender(): void {
    new DogShow(this.regions.dogShow, this.model).render();
    new DogForm(this.regions.dogForm, this.model).render();
  };

  template(): string {
    return `
      <div>
        <div class="dog-show"></div>
        <div class="dog-form"></div>
      </div>
    `;
  }
}