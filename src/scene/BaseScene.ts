import EventDispatcher = laya.events.EventDispatcher;
import DisplayNode = laya.display.Node;
/*
* name;
*/
abstract class BaseScene extends EventDispatcher{
    protected _type:EnumSceneType = EnumSceneType.empty;
    protected _isStart:boolean;
    protected _root:DisplayNode;

    public abstract preload():void;

    public abstract init():void;

    public show():void
    {
        this._root = new DisplayNode();
        Laya.stage.addChildAt(this._root, 0);
        this.onShow();
        Laya.timer.frameOnce(1, this, this.start);
    }

    protected abstract onShow():void

    public start():void
    {
        this._isStart = true;
        this.onStart();
    }

    protected abstract onStart():void

    public abstract  update():void;

    public clear():void
    {
        this._isStart = false;
        this._root.destroy();
        this._root = null;
    }

    public get type():EnumSceneType
    {
        return this._type;
    }

    public get isStart():boolean
    {
        return this._isStart;
    }
}