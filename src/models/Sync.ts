import axios, { AxiosPromise } from "axios";
import { DogProps } from "./Dog";
const rootUrl = 'http://localhost:3000/users';

export class Sync {
  constructor(public rootUrl: string) {};

  fetch(id : number): AxiosPromise {
   return axios.get(`${this.rootUrl}/${id}`)
      
  };

  save(data: DogProps): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data)
    } else {
      return axios.post(this.rootUrl, data);
    }
  };
}