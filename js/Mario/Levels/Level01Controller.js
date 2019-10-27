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
var Level01Controller = /** @class */ (function (_super) {
    __extends(Level01Controller, _super);
    function Level01Controller() {
        return _super.call(this, {
            tileFlags: [
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb', 'hlg', '', '', '?'],
                ['rb', 'rb', 'hcslg', 'htg'],
                ['rb', 'rb', 'hrg'],
                ['rb', 'rb', '', '', '', '', '', '', '', 'cbl', 'ctl'],
                ['rb', 'rb', '', '', '', 'btb', '', '', '', 'cb', 'ct'],
                ['rb', 'rb', '', '', '', '?', '', '', '', 'cbr', 'ctr'],
                ['rb', 'rb', '', '', '', 'btb', '', '', '?'],
                ['rb', 'rb', '', '', '', '?'],
                ['rb', 'rb', '', '', '', 'btb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb', 'tbl', 'ttl'],
                ['rb', 'rb', 'tbr', 'ttr'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb', 'tbl', 'tbl', 'ttl'],
                ['rb', 'rb', 'tbr', 'tbr', 'ttr'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb', 'tbl', 'tbl', 'tbl', 'ttl'],
                ['rb', 'rb', 'tbr', 'tbr', 'tbr', 'ttr'],
                ['rb', 'rb', 'hlg',],
                ['rb', 'rb', 'hcslg', 'hlg'],
                ['rb', 'rb', 'hcg', 'hcslg', 'htg'],
                ['rb', 'rb', 'hcsrg', 'hrg'],
                ['rb', 'rb', 'hrg'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb', 'tbl', 'tbl', 'tbl', 'ttl'],
                ['rb', 'rb', 'tbr', 'tbr', 'tbr', 'ttr'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb', 'hlg',],
                ['rb', 'rb', 'hcslg', 'htg'],
                ['rb', 'rb', 'hrg'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                [],
                [],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb', '', '', '', 'btb'],
                ['rb', 'rb', '', '', '', '?'],
                ['rb', 'rb', '', '', '', 'btb'],
                ['rb', 'rb', '', '', '', '', '', '', '', 'btb'],
                ['rb', 'rb', '', '', '', '', '', '', '', 'btb'],
                ['rb', 'rb', '', '', '', '', '', '', '', 'btb'],
                ['rb', 'rb', '', '', '', '', '', '', '', 'btb'],
                ['rb', 'rb', '', '', '', '', '', '', '', 'btb'],
                ['rb', 'rb', '', '', '', '', '', '', '', 'btb'],
                ['', '', '', '', '', '', '', '', '', 'btb'],
                [],
                [],
                ['rb', 'rb'],
                ['rb', 'rb', '', '', '', '', '', '', '', 'btb'],
                ['rb', 'rb', '', '', '', '', '', '', '', 'btb'],
                ['rb', 'rb', '', '', '', '', '', '', '', 'btb'],
                ['rb', 'rb', '', '', '', 'btb', '', '', '', '?'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb', '', '', '', 'btb'],
                ['rb', 'rb', '', '', '', 'btb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb', '', '', '', '?'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb', '', '', '', '?', '', '', '', '?'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb', '', '', '', '?'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb', '', '', '', 'btb'],
                ['rb', 'rb', '', '', '', '', '', '', '', 'btb'],
                ['rb', 'rb', '', '', '', '', '', '', '', 'btb'],
                ['rb', 'rb', '', '', '', '', '', '', '', 'btb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
                ['rb', 'rb', '', '', '', '', '', '', '', 'btb'],
                ['rb', 'rb', '', '', '', 'btb', '', '', '', '?'],
                ['rb', 'rb', '', '', '', 'btb', '', '', '', '?'],
                ['rb', 'rb', '', '', '', '', '', '', '', 'btb'],
                ['rb', 'rb'],
                ['rb', 'rb'],
            ],
        }) || this;
    }
    Level01Controller.prototype.update = function () {
        this.handleCameraZoom();
    };
    return Level01Controller;
}(_1.LevelController));
exports.Level01Controller = Level01Controller;
//# sourceMappingURL=Level01Controller.js.map