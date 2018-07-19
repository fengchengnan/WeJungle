import WebGL = Laya.WebGL;
import Handler = Laya.Handler;
import mainView = view.Main;
import Sprite = laya.display.Sprite;
/*
* name;
*/
class MainEntry{

    constructor(){

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
    private beginLoad(){
        Laya.loader.load("res/atlas/comp.atlas", Handler.create(this, this.onLoaded));
    }
    private onLoaded(): void {
        //实例UI界面
        var startPanel: mainView.StartPanel = new mainView.StartPanel();
        //Laya.stage.addChild(startPanel);

        this.createContent();
    }

    private p:number = 2;
    private createContent():void
    {
        LayerManager.setup();

        LoadingPanel.show();

        Laya.timer.frameLoop(1,this,this.onFrame);
        
        setTimeout(function() {
            LoadingPanel.hide();
        }, 5000);
    }
    private onFrame():void
    {
        this.p+=3;
        LoadingPanel.progress(this.p,100);
    }
}
new MainEntry();