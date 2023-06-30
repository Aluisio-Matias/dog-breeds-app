import axios, { AxiosResponse } from "axios";
import { Eventing } from './Eventing';

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

export class Dog {
  public events: Eventing = new Eventing();
  
  constructor(private data: DogProps) {}

  get(propName: string): (number | string) {
    return this.data[propName];
  };

  set(update: DogProps): void {
    Object.assign(this.data, update)
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