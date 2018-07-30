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
var UICanvas = /** @class */ (function (_super) {
    __extends(UICanvas, _super);
    function UICanvas() {
        var _this = _super.call(this) || this;
        _this.pWidth = 1136;
        _this.pHeight = 640;
        _this.resize();
        return _this;
    }
    /**设置目标分辨率*/
    UICanvas.prototype.setPixelSize = function (w, h) {
        this.pWidth = w;
        this.pHeight = h;
        this.resize();
    };
    UICanvas.prototype.resize = function () {
        this.width = this.pWidth;
        this.height = this.pHeight;
        var s = Laya.stage.width / this.pWidth;
        this.height = Laya.stage.height / s;
        this.scaleX = this.scaleY = s;
    };
    return UICanvas;
}(laya.display.Sprite));
//# sourceMappingURL=Canvas.js.map