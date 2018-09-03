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
* 红色食物刷新点;
*/
var RedFoodCreator = /** @class */ (function (_super) {
    __extends(RedFoodCreator, _super);
    function RedFoodCreator(max) {
        var _this = _super.call(this, FoodTypeEnum.Red, max, FoodCreatorSkinEnum.Red) || this;
        _this.radius = FoodCreatorConst.BaseRadius;
        return _this;
    }
    Object.defineProperty(RedFoodCreator.prototype, "radius", {
        /**
         * 食物刷新点的半径
         */
        set: function (v) {
            this._radius = v;
            var scale = v / FoodCreatorConst.BaseRadius;
            if (this._skinView != null) {
                this._skinView.scaleX = this._skinView.scaleY = scale;
            }
        },
        enumerable: true,
        configurable: true
    });
    RedFoodCreator.prototype.create = function () {
        var r = Math.random() * 360 * Math.PI / 180;
        var x = Math.cos(r) * this._radius + this.position.x;
        var y = Math.sin(r) * this._radius + this.position.y;
        FoodFactory.createByParam(this._foodType, x, y, this);
    };
    return RedFoodCreator;
}(BaseFoodCreator));
//
//
//
//
var FoodCreatorConst = /** @class */ (function () {
    function FoodCreatorConst() {
    }
    /**
     * 食物生成点的基础半径，其它的大小基于这个进行缩放
     */
    FoodCreatorConst.BaseRadius = 100;
    return FoodCreatorConst;
}());
//# sourceMappingURL=RedFoodCreator.js.map