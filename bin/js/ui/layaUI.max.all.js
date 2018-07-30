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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var main;
    (function (main) {
        var LoadingUI = /** @class */ (function (_super) {
            __extends(LoadingUI, _super);
            function LoadingUI() {
                return _super.call(this) || this;
            }
            LoadingUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.main.LoadingUI.uiView);
            };
            LoadingUI.uiView = { "type": "View", "props": { "width": 1136, "height": 640 }, "child": [{ "type": "Rect", "props": { "width": 1136, "lineWidth": 1, "height": 640, "fillColor": "#50603c" } }, { "type": "Label", "props": { "y": 299, "x": 431, "width": 274, "text": "Loading...", "height": 41, "fontSize": 30, "color": "#ffffff", "anchorY": 0, "anchorX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 576, "x": 527, "width": 81, "var": "txt", "text": "100%", "height": 25, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Rect", "props": { "y": 554, "x": 129, "width": 878, "lineWidth": 1, "height": 16, "fillColor": "#ffffff" } }, { "type": "Box", "props": { "y": 556, "x": 131, "var": "bar" }, "child": [{ "type": "Rect", "props": { "width": 874, "lineWidth": 1, "height": 12, "fillColor": "#848484" } }] }] };
            return LoadingUI;
        }(View));
        main.LoadingUI = LoadingUI;
    })(main = ui.main || (ui.main = {}));
})(ui || (ui = {}));
(function (ui) {
    var main;
    (function (main) {
        var StartPanelUI = /** @class */ (function (_super) {
            __extends(StartPanelUI, _super);
            function StartPanelUI() {
                return _super.call(this) || this;
            }
            StartPanelUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.main.StartPanelUI.uiView);
            };
            StartPanelUI.uiView = { "type": "View", "props": { "width": 1136, "height": 640 }, "child": [{ "type": "Button", "props": { "width": 288, "var": "startBtn", "skin": "comp/button.png", "sizeGrid": "4,4,4,4", "labelSize": 25, "labelPadding": "0", "labelFont": "Microsoft YaHei", "labelBold": true, "labelAlign": "center", "label": "开始", "height": 80, "centerY": 53, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "TextInput", "props": { "width": 288, "var": "nameInput", "type": "text", "skin": "comp/textinput.png", "prompt": "请输入名字...", "overflow": "hidden", "height": 56, "fontSize": 25, "font": "Microsoft YaHei", "centerY": -76, "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] };
            return StartPanelUI;
        }(View));
        main.StartPanelUI = StartPanelUI;
    })(main = ui.main || (ui.main = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map