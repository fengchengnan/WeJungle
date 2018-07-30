var LoadingView = view.main.LoadingView;
/*
* 通用loading面板;
*/
///<reference path="LoadingView.ts" />
var LoadingPanel = /** @class */ (function () {
    function LoadingPanel() {
        this.panel = new LoadingView();
    }
    Object.defineProperty(LoadingPanel, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new LoadingPanel();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    LoadingPanel.prototype.show = function () {
        this.panel.show();
        LayerManager.topLayer.addChild(this.panel);
    };
    LoadingPanel.prototype.progress = function (current, total) {
        this.panel.progress(current, total);
    };
    LoadingPanel.prototype.hide = function () {
        this.panel.hide();
        DisplayUtil.removeSprite(this.panel);
    };
    /**
     * 显示loading画面
     */
    LoadingPanel.show = function () {
        this.instance.show();
    };
    LoadingPanel.progress = function (current, total) {
        this.instance.progress(current, total);
    };
    LoadingPanel.hide = function () {
        this.instance.hide();
    };
    //----------------------------事件-------------------------------------//
    LoadingPanel.prototype.on = function (type, caller, listener, args) {
        this.panel.on(type, caller, listener, args);
    };
    LoadingPanel.prototype.off = function (type, caller, listener, onceOnly) {
        this.panel.off(type, caller, listener, onceOnly);
    };
    LoadingPanel.prototype.once = function (type, caller, listener, args) {
        this.panel.once(type, caller, listener, args);
    };
    LoadingPanel.prototype.event = function (type, data) {
        this.panel.event(type, data);
    };
    return LoadingPanel;
}());
//# sourceMappingURL=LoadingPanel.js.map