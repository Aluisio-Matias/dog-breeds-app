import axios, { AxiosResponse } from "axios";
import { Dog, DogProps } from "./Dog";
import { Eventing } from "./Eventing";

export class Collection {
  models: Dog[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  };

  get trigger() {
    return this.events.trigger;
  };

  fetch(): void {
    axios.get(this.rootUrl)
    .then((response: AxiosResponse) => {
      response.data.forEach((value: DogProps) => {
        const dog = Dog.buildDog(value);
        this.models.push(dog);
      });
      this.trigger('change');
    });
  };
}