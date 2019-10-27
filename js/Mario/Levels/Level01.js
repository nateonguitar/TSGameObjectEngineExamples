"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var Level01 = /** @class */ (function (_super) {
    __extends(Level01, _super);
    function Level01() {
        return _super.call(this, {
            managingGameObjectClass: _1.Level01Controller,
            backgroundColor: "#5c94fc",
        }) || this;
    }
    return Level01;
}(_1.PlayableLevel));
exports.Level01 = Level01;
//# sourceMappingURL=Level01.js.map