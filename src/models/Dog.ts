import { Eventing } from './Eventing';

export interface DogProps {
  id?: number;
  breedName?: string;
  scientificName?: string;
  temperament?: string;
  lifeSpan?: string;
  dailySleep?: string;
  gestationPeriod?: string;
};

export class Dog {
  public events: Eventing = new Eventing();
  
  constructor(private data: DogProps) {}

  get(propName: string): (number | string) {
    return this.data[propName];
  };

  set(update: DogProps): void {
    Object.assign(this.data, update)
  };

};