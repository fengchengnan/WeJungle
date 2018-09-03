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
* name;
*/
var BaseScene = /** @class */ (function (_super) {
    __extends(BaseScene, _super);
    function BaseScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._type = EnumSceneType.empty;
        return _this;
    }
    BaseScene.prototype.show = function () {
        this._root = new DisplayNode();
        Laya.stage.addChildAt(this._root, 0);
        this.onShow();
        Laya.timer.frameOnce(1, this, this.start);
    };
    BaseScene.prototype.start = function () {
        this._isStart = true;
        this.onStart();
    };
    BaseScene.prototype.clear = function () {
        this._isStart = false;
        this._root.destroy();
        this._root = null;
    };
    Object.defineProperty(BaseScene.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseScene.prototype, "isStart", {
        get: function () {
            return this._isStart;
        },
        enumerable: true,
        configurable: true
    });
    return BaseScene;
}(laya.events.EventDispatcher));
//# sourceMappingURL=BaseScene.js.map