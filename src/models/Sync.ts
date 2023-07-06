import axios, { AxiosPromise } from "axios";
import { DogProps } from "./Dog";

const rootUrl = 'http://localhost:3000/dogs';

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {};

  fetch(id : number): AxiosPromise {
   return axios.get(`${this.rootUrl}/${id}`)
  };

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data)
    } else {
      return axios.post(this.rootUrl, data);
    }
  };
}