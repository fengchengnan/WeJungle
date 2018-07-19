/*
* 通用loading面板;
*/
class LoadingPanel
{
    private static _instance:LoadingPanel;

    private panel:mainView.LoadingView;
    
    constructor()
    {
        this.panel = new mainView.LoadingView();
    }

    private static get instance():LoadingPanel
    {
        if(this._instance == null)
        {
            this._instance = new LoadingPanel();
        }
        return this._instance;
    }

    private show():void
    {
        this.panel.show();
        LayerManager.topLayer.addChild(this.panel)
    }
    private progress(current:number,total:number):void
    {
        this.panel.progress(current,total);
    }
    private hide():void
    {
        this.panel.hide();
        DisplayUtil.removeSprite(this.panel);
    }
    /**
     * 显示loading画面
     */
    public static show():void
    {
        this.instance.show();
    }

    public static progress(current:number,total:number):void
    {
        this.instance.progress(current,total);
    }
    public static hide():void
    {
        this.instance.hide();
    }
}