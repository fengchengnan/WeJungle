import WebGL = Laya.WebGL;
import Handler = Laya.Handler;
import mainView = view.Main;
/*
* name;
*/
class MainEntry{
    constructor(){

        //初始化微信小游戏
        Laya.MiniAdpter.init();
        //程序入口
        Laya.init(1136, 640, WebGL);
        //激活资源版本控制
        Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);

        function beginLoad(){
            Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
        }

        function onLoaded(): void {
            //实例UI界面
            var startPanel: mainView.StartPanel = new mainView.StartPanel();
            Laya.stage.addChild(startPanel);
            //startPanel.x = Laya.stage.width/2;
            //startPanel.y = Laya.stage.height/2;
        }
    }
}
new MainEntry();