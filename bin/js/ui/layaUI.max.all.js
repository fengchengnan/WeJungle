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
    var Main;
    (function (Main) {
        var StartPanelUI = /** @class */ (function (_super) {
            __extends(StartPanelUI, _super);
            function StartPanelUI() {
                return _super.call(this) || this;
            }
            StartPanelUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Main.StartPanelUI.uiView);
            };
            StartPanelUI.uiView = { "type": "View", "props": { "width": 1136, "height": 640 }, "child": [{ "type": "Button", "props": { "width": 288, "var": "startBtn", "skin": "comp/button.png", "sizeGrid": "4,4,4,4", "labelSize": 25, "labelPadding": "0", "labelFont": "Microsoft YaHei", "labelBold": true, "labelAlign": "center", "label": "开始", "height": 80, "centerY": 53, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "TextInput", "props": { "width": 288, "var": "nameInput", "type": "text", "skin": "comp/textinput.png", "prompt": "请输入名字...", "overflow": "hidden", "height": 56, "fontSize": 25, "font": "Microsoft YaHei", "centerY": -76, "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] };
            return StartPanelUI;
        }(View));
        Main.StartPanelUI = StartPanelUI;
    })(Main = ui.Main || (ui.Main = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map