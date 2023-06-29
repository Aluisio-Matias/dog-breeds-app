"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
;
var Dog = /** @class */ (function () {
    function Dog(data) {
        this.data = data;
        this.events = {};
    }
    Dog.prototype.get = function (propName) {
        return this.data[propName];
    };
    ;
    Dog.prototype.set = function (update) {
        Object.assign(this.data, update);
    };
    ;
    Dog.prototype.on = function (eventName, callback) {
        var handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    };
    ;
    Dog.prototype.trigger = function (eventName) {
        var handlers = this.events[eventName];
        if (!handlers || handlers.length === 0)
            return;
        handlers.forEach(function (callback) {
            callback();
        });
    };
    ;
    return Dog;
}());
exports.Dog = Dog;
