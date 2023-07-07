import { Collection } from "./models/Collection";

const collection = new Collection('http://localhost:3000/dogs')

collection.on('change', () =>{
  console.log(collection)
})

collection.fetch();