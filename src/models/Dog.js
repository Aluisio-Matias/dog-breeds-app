"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
;
var Dog = /** @class */ (function () {
    function Dog(data) {
        this.data = data;
    }
    Dog.prototype.get = function (propName) {
        return this.data[propName];
    };
    ;
    Dog.prototype.set = function (update) {
        Object.assign(this.data, update);
    };
    return Dog;
}());
exports.Dog = Dog;
