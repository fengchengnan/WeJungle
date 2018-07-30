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
var BaseEvent = laya.events.Event;
/*
* name;
*/
var SceneEvent = /** @class */ (function (_super) {
    __extends(SceneEvent, _super);
    function SceneEvent() {
        return _super.call(this) || this;
    }
    SceneEvent.PRELOAD_COMPLETE = "preloadComplete";
    SceneEvent.INIT_COMPLETE = "initComplete";
    return SceneEvent;
}(BaseEvent));
//# sourceMappingURL=SceneEvent.js.map