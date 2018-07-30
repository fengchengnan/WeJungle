import WebGL = Laya.WebGL;
import Handler = Laya.Handler;
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

        this.setupSystems();
        SceneManager.show(EnumSceneType.uiScene);
    }

    private setupSystems()
    {
        LayerManager.setup();
        SceneManager.setUp();
    }
}
new MainEntry();