var WebGL = Laya.WebGL;
var Handler = Laya.Handler;
var Sprite = laya.display.Sprite;
var StartPanel = view.main.StartPanel;
var LoadingView = view.main.LoadingView;
var Dictionary = laya.utils.Dictionary;
var EventDispatcher = laya.events.EventDispatcher;
var DisplayNode = laya.display.Node;
var BaseEvent = laya.events.Event;
/*
* name;
*/
var MainEntry = /** @class */ (function () {
    function MainEntry() {
        //初始化微信小游戏
        Laya.MiniAdpter.init();
        //程序入口
        Laya.init(1136, 640, WebGL);
        Laya.stage.scaleMode = laya.display.Stage.SCALE_NOBORDER;
        Laya.stage.alignH = laya.display.Stage.ALIGN_LEFT;
        Laya.stage.alignV = laya.display.Stage.ALIGN_TOP;
        //
        //激活资源版本控制
        Laya.ResourceVersion.enable("version.json", Handler.create(this, this.beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
    }
    MainEntry.prototype.beginLoad = function () {
        Laya.loader.load("res/atlas/comp.atlas", Handler.create(this, this.onLoaded));
    };
    MainEntry.prototype.onLoaded = function () {
        this.setupSystems();
        SceneManager.show(EnumSceneType.uiScene);
    };
    MainEntry.prototype.setupSystems = function () {
        LayerManager.setup();
        SceneManager.setUp();
    };
    return MainEntry;
}());
new MainEntry();
//# sourceMappingURL=MainEntry.js.map