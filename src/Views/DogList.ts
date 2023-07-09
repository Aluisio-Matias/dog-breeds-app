import { CollectionView } from "./CollectionView";
import { Dog, DogProps } from "../models/Dog";
import { DogShow } from "./DogShow";

export class DogList extends CollectionView<Dog, DogProps> {
  renderItem(model: Dog, itemParent: Element): void {
    new DogShow(itemParent, model).render();
  }
}