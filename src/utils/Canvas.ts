class UICanvas extends laya.display.Sprite{

    private pWidth:number = 1136;
    private pHeight:number = 640;

    constructor(){
        super();
        
        this.resize();
    }
    /**设置目标分辨率*/
    public setPixelSize(w:number,h:number):void
    {
        this.pWidth = w;
        this.pHeight = h;

        this.resize();
    }

    private resize():void
    {
        this.width = this.pWidth;
        this.height = this.pHeight;

        var s = Laya.stage.width/this.pWidth;
        this.height = Laya.stage.height/s;

        this.scaleX = this.scaleY = s;
    }
}
