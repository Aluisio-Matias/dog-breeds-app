"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
var axios_1 = require("axios");
var Eventing_1 = require("./Eventing");
var dbURL = 'http://localhost:3000/dogs';
;
var Dog = /** @class */ (function () {
    function Dog(data) {
        this.data = data;
        this.events = new Eventing_1.Eventing();
    }
    Dog.prototype.get = function (propName) {
        return this.data[propName];
    };
    ;
    Dog.prototype.set = function (update) {
        Object.assign(this.data, update);
    };
    ;
    Dog.prototype.fetch = function () {
        var _this = this;
        axios_1.default.get("".concat(dbURL, "/").concat(this.get('id')))
            .then(function (response) {
            _this.set(response.data);
        });
    };
    ;
    Dog.prototype.save = function () {
        var id = this.get('id');
        if (id) {
            axios_1.default.put("".concat(dbURL, "/").concat(id), this.data);
        }
        else {
            axios_1.default.post(dbURL, this.data);
        }
    };
    ;
    return Dog;
}());
exports.Dog = Dog;
;
