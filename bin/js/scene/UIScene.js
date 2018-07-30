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
var StartPanel = view.main.StartPanel;
/*
* UI场景
*/
var UIScene = /** @class */ (function (_super) {
    __extends(UIScene, _super);
    function UIScene() {
        return _super.call(this) || this;
    }
    UIScene.prototype.preload = function () {
        this.event(SceneEvent.PRELOAD_COMPLETE);
    };
    UIScene.prototype.init = function () {
    };
    UIScene.prototype.onShow = function () {
        var startPanel = new StartPanel();
        this._root.addChild(startPanel);
    };
    UIScene.prototype.onStart = function () {
    };
    UIScene.prototype.update = function () {
    };
    return UIScene;
}(BaseScene));
//# sourceMappingURL=UIScene.js.map