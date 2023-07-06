import { Eventing } from './Eventing';
import { Sync } from "./Sync";
import { Attributes } from './Attributes';
import { AxiosResponse } from "axios";

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

export class Dog {
  public events: Eventing = new Eventing();
  public sync: Sync<DogProps> = new Sync<DogProps>(rootUrl);
  public attributes: Attributes<DogProps>;

  constructor(attrs: DogProps) {
    this.attributes = new Attributes<DogProps>(attrs);
  };

  get on() {
    return this.events.on;
  };

  get trigger() {
    return this.events.trigger;
  };

  get get() {
    return this.attributes.get;
  };

  set(update: DogProps) {
    this.attributes.set(update);
    this.events.trigger('change');
  };

  fetch(): void {
    const id = this.get('id');
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    };

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  };

  save(): void {
    this.sync.save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
    })
      .catch(() => {
      this.trigger('error');
    })
  };
};