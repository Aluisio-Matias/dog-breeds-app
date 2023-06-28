interface DogProps {
  breedName?: string;
  scientificName?: string;
  coolName?: string;
  temperament?: string;
  lifeSpan?: string;
  dailySleep?: string;
  gestationPeriod?: string;
};

export class Dog {
  constructor(private data: DogProps) {}

  get(propName: string): (number | string) {
    return this.data[propName];
  };

  set(update: DogProps): void {
    Object.assign(this.data, update)
  }
}