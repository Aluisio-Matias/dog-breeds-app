"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
var Eventing_1 = require("./Eventing");
var Sync_1 = require("./Sync");
var Attributes_1 = require("./Attributes");
;
var rootUrl = 'http://localhost:3000/dogs';
var Dog = /** @class */ (function () {
    function Dog(attrs) {
        this.events = new Eventing_1.Eventing();
        this.sync = new Sync_1.Sync(rootUrl);
        this.attributes = new Attributes_1.Attributes(attrs);
    }
    ;
    return Dog;
}());
exports.Dog = Dog;
;
