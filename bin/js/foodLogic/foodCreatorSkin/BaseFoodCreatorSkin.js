var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* 食物点的外观表现;
*/
var BaseFoodCreatorSkin = /** @class */ (function (_super) {
    __extends(BaseFoodCreatorSkin, _super);
    function BaseFoodCreatorSkin() {
        var _this = _super.call(this) || this;
        _this.graphics.drawCircle(0, 0, FoodCreatorConst.BaseRadius, "#ffffff");
        return _this;
    }
    return BaseFoodCreatorSkin;
}(laya.display.Sprite));
//# sourceMappingURL=BaseFoodCreatorSkin.js.map