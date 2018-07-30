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
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var main;
    (function (main) {
        var LoadingView = /** @class */ (function (_super) {
            __extends(LoadingView, _super);
            function LoadingView() {
                var _this = _super.call(this) || this;
                _this.scaleSpeed = 0.01;
                return _this;
            }
            /**
             * 每次显示时的初始化
             */
            LoadingView.prototype.show = function () {
                this.currentP = 0;
                this.targetP = 0;
                this.progress(0, 100);
                this.frameLoop(1, this, this.onFrame);
            };
            LoadingView.prototype.onFrame = function () {
                //console.log(1);
                if (this.currentP < this.targetP) {
                    this.currentP += this.scaleSpeed;
                    this.bar.scaleX = this.currentP;
                    this.txt.text = Math.floor(this.currentP * 100) + "%";
                }
                else {
                    this.currentP = this.targetP;
                }
                if (this.currentP == 1) {
                    this.event(BaseEvent.COMPLETE);
                    this.clearTimer(this, this.onFrame);
                }
            };
            LoadingView.prototype.hide = function () {
                this.clearTimer(this, this.onFrame);
            };
            /**
             * 显示进度条百分比
             */
            LoadingView.prototype.progress = function (current, total) {
                if (current > total) {
                    current = total;
                }
                this.targetP = current / total;
            };
            return LoadingView;
        }(ui.main.LoadingUI));
        main.LoadingView = LoadingView;
    })(main = view.main || (view.main = {}));
})(view || (view = {}));
//# sourceMappingURL=LoadingView.js.map