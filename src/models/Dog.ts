import { Model } from "./Model";
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";

export interface DogProps {
  id?: number;
  breedName?: string;
  scientificName?: string;
  temperament?: string;
  lifeSpan?: string;
  dailySleep?: string;
  gestationPeriod?: string;
};

const rootUrl = 'http://localhost:3000/dogs';

export class Dog extends Model<DogProps> {
  static buildDog(attrs: DogProps): Dog {
    return new Dog(
      new Attributes<DogProps>(attrs),
      new Eventing(),
      new ApiSync<DogProps>(rootUrl)
    );
  }
};