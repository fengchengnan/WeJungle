/*
* name;
*/
var BaseFood = /** @class */ (function () {
    function BaseFood() {
        this.initView();
    }
    BaseFood.prototype.initView = function () {
        this._foodView = new laya.display.Sprite();
        this._foodView.graphics.drawCircle(0, 0, 10, "#ff00cc");
    };
    Object.defineProperty(BaseFood.prototype, "position", {
        get: function () {
            return this._pos;
        },
        /**
         * 设置坐标，感觉要区分一下本地坐标和世界坐标，用来设置物理引擎里的位置
         * @param x
         * @param y
         */
        set: function (v) {
            this._pos = v;
            this._foodView.x = v.x;
            this._foodView.y = v.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFood.prototype, "view", {
        get: function () {
            return this._foodView;
        },
        enumerable: true,
        configurable: true
    });
    return BaseFood;
}());
//# sourceMappingURL=BaseFood.js.map