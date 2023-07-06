"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attributes = void 0;
var Attributes = /** @class */ (function () {
    function Attributes(data) {
        this.data = data;
    }
    Attributes.prototype.get = function (key) {
        return this.data[key];
    };
    ;
    Attributes.prototype.set = function (update) {
        Object.assign(this.data, update);
    };
    ;
    return Attributes;
}());
exports.Attributes = Attributes;
