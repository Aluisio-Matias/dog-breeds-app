"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var Dog_1 = require("./models/Dog");
var dbURL = 'http://localhost:3000/dogs';
axios_1.default.post(dbURL, {
    breedName: 'German Shepard',
    scientificName: 'Canis lupus familiaris',
    temperament: 'Inteligent',
    lifeSpan: '9-13 years',
    dailySleep: '12-14 years',
    gestationPeriod: '63 days'
});
axios_1.default.get("".concat(dbURL, "/1"));
var dog = new Dog_1.Dog({
    breedName: 'Boder Collie',
    scientificName: 'unknown',
    temperament: 'Active',
    lifeSpan: '9-13 years',
    dailySleep: '12-14 years',
    gestationPeriod: '63 days'
});
dog.save();
dog.events.on('change', function () {
    console.log('change!');
});
dog.events.trigger('change');
