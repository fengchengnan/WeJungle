/*
* name;
*/
class BaseFood
{
    protected _foodView:laya.display.Sprite;
    protected _pos:Vector2;

    constructor()
    {
        this.initView();
    }
    protected initView():void
    {
        this._foodView = new laya.display.Sprite();
        this._foodView.graphics.drawCircle(0,0,10,"#ff00cc");
    }
    /**
     * 设置坐标，感觉要区分一下本地坐标和世界坐标，用来设置物理引擎里的位置
     * @param x 
     * @param y 
     */
    public set position(v:Vector2)
    {
        this._pos = v;
        this._foodView.x = v.x;
        this._foodView.y = v.y;
    }
    public get position():Vector2
    {
        return this._pos;
    }
    public get view():laya.display.Sprite
    {
        return this._foodView;
    }
}