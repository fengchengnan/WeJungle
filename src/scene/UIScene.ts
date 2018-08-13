
/*
* UI场景
*/
class UIScene extends BaseScene{
    constructor(){
        super();
    }


    public preload():void
    {
        this.event(SceneEvent.PRELOAD_COMPLETE);
    } 

    public init():void
    {
    }

   
    protected onShow():void
    {
        let startPanel:StartPanel = new StartPanel();
        this._root.addChild(startPanel);
    }

    protected onStart():void
    {

    }

    public update():void
    {

    }

}