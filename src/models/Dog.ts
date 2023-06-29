import axios, { AxiosResponse } from "axios";

const dbURL = 'http://localhost:3000/dogs';

interface DogProps {
  id?: number;
  breedName?: string;
  scientificName?: string;
  temperament?: string;
  lifeSpan?: string;
  dailySleep?: string;
  gestationPeriod?: string;
};

//type alias - callback funtion that doesn't return anything
type Callback = () => void;

export class Dog {
  events: {[key: string]: Callback[]} = {};
  
  constructor(private data: DogProps) {}

  get(propName: string): (number | string) {
    return this.data[propName];
  };

  set(update: DogProps): void {
    Object.assign(this.data, update)
  };

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) return;

    handlers.forEach(callback => {
      callback();
    })
  };

  fetch(): void {
    axios.get(`${dbURL}/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      })
  };

  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`${dbURL}/${id}`, this.data)
    } else {
      axios.post(dbURL, this.data);
    }
  };

};