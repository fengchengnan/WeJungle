var WebGL = Laya.WebGL;
var Handler = Laya.Handler;
var mainView = view.Main;
/*
* name;
*/
var MainEntry = /** @class */ (function () {
    function MainEntry() {
        //初始化微信小游戏
        Laya.MiniAdpter.init();
        //程序入口
        Laya.init(1136, 640, WebGL);
        //激活资源版本控制
        Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
        function beginLoad() {
            Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
        }
        function onLoaded() {
            //实例UI界面
            var startPanel = new mainView.StartPanel();
            Laya.stage.addChild(startPanel);
            //startPanel.x = Laya.stage.width/2;
            //startPanel.y = Laya.stage.height/2;
        }
    }
    return MainEntry;
}());
new MainEntry();
//# sourceMappingURL=MainEntry.js.map