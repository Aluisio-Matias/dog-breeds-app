"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sync = void 0;
var axios_1 = require("axios");
var rootUrl = 'http://localhost:3000/users';
var Sync = /** @class */ (function () {
    function Sync(rootUrl) {
        this.rootUrl = rootUrl;
    }
    ;
    Sync.prototype.fetch = function (id) {
        return axios_1.default.get("".concat(this.rootUrl, "/").concat(id));
    };
    ;
    Sync.prototype.save = function (data) {
        var id = data.id;
        if (id) {
            return axios_1.default.put("".concat(this.rootUrl, "/").concat(id), data);
        }
        else {
            return axios_1.default.post(this.rootUrl, data);
        }
    };
    ;
    return Sync;
}());
exports.Sync = Sync;
