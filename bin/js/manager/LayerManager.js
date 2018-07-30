/*
* 层级管理;
*/
var LayerManager = /** @class */ (function () {
    function LayerManager() {
    }
    LayerManager.setup = function () {
        var canvas = new UICanvas();
        canvas.setPixelSize(1136, 640);
        LayerManager._topLayer = canvas;
        canvas = new UICanvas();
        canvas.setPixelSize(1136, 640);
        LayerManager._uiLayer = canvas;
        Laya.stage.addChild(LayerManager._uiLayer);
        Laya.stage.addChild(LayerManager._topLayer);
    };
    Object.defineProperty(LayerManager, "topLayer", {
        /**
         * 最顶层容器
         */
        get: function () {
            return LayerManager._topLayer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerManager, "uiLayer", {
        /**
         * UI层容器
         */
        get: function () {
            return LayerManager._uiLayer;
        },
        enumerable: true,
        configurable: true
    });
    return LayerManager;
}());
//# sourceMappingURL=LayerManager.js.map