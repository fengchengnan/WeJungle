import LoadingView = view.main.LoadingView;

/*
* 通用loading面板;
*/
///<reference path="LoadingView.ts" />
class LoadingPanel{
    
    private static _instance:LoadingPanel;

    private panel:LoadingView;
    
    constructor()
    {
        this.panel = new LoadingView();
    }

    public static get instance():LoadingPanel
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

    //----------------------------事件-------------------------------------//
    public on(type:string, caller:any, listener:Function, args?:any[]):void
    {
        this.panel.on(type, caller, listener, args);
    }

    public off(type:string, caller:any, listener:Function, onceOnly?:boolean):void
    {
        this.panel.off(type, caller, listener, onceOnly);
    }

    public once(type:string, caller:any, listener:Function, args?:any[]):void
    {
        this.panel.once(type, caller, listener, args);
    }

    public event(type:string, data:any):void
    {
        this.panel.event(type, data);
    }
}