import { Eventing } from './Eventing';
import { Sync } from "./Sync";
import { Attributes } from './Attributes';

export interface DogProps {
  id?: number;
  breedName?: string;
  scientificName?: string;
  temperament?: string;
  lifeSpan?: string;
  dailySleep?: string;
  gestationPeriod?: string;
};

const rootUrl = 'http://localhost:3000/users';

export class Dog {
  public events: Eventing = new Eventing();
  public sync: Sync<DogProps> = new Sync<DogProps>(rootUrl);
  public attributes: Attributes<DogProps>;

  constructor(attrs: DogProps) {
    this.attributes = new Attributes<DogProps>(attrs);
  };
};