import { Model } from "./Model";
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

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

  static buildDogCollection(): Collection<Dog, DogProps> {
    return new Collection<Dog, DogProps>(
      rootUrl,
      (json: DogProps) => Dog.buildDog(json)
    );
  };
};