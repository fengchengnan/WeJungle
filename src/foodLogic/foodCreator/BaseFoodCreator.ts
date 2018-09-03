/*
* 食物生成的基类，可以通过对象池重复利用，改变不同的参数即可
*/
class BaseFoodCreator{

    protected _foodType:FoodTypeEnum;
    protected _maxNum:number;
    protected _skinType:FoodCreatorSkinEnum;

    protected _skinView:BaseFoodCreatorSkin;
    protected _pos:Vector2;

    constructor(type:FoodTypeEnum,max:number,skin:FoodCreatorSkinEnum)
    {
        this.init(type,max,skin);
    }
    /**
     * 重置食物生成点的属性，可以直接改变生成点的类型，可以用作对象池复用
     * 暂时可能用不到，因为食物生成点存在以后不太可能有变化
     * @param type 
     * @param max 
     * @param skin 
     */
    public reset(type:FoodTypeEnum,max:number,skin:FoodCreatorSkinEnum):void
    {
        this.init(type,max,skin);
    }

    private init(type:FoodTypeEnum,max:number,skin:FoodCreatorSkinEnum):void
    {
        this.foodType = type;
        this.maxNum = max;
        this.skinEnum = skin;
        
    }

    public set position(p:Vector2)
    {
        this._pos = p;
        if(this._skinView != null)
        {
            this._skinView.x = p.x;
            this._skinView.y = p.y;
        }
    }
    public get position():Vector2
    {
        return this._pos;
    }

    public set foodType(type:FoodTypeEnum)
    {
        this._foodType = type;
    }
    public get foodType():FoodTypeEnum
    {
        return this._foodType;
    }
    /**
     * 刷新食物的最大数量
     */
    public set maxNum(n:number)
    {
        this._maxNum = n;
    }

    public get maxNum():number
    {
        return this._maxNum;
    }
    /**
     * 设置刷新点皮肤
     */
    public set skinEnum(value:FoodCreatorSkinEnum)
    {
        if(value == this.skinEnum)
            return;
        
        this._skinType = value;
        //具体可以通过工厂获取，对象池中重复利用，不在视野内的可以不用显示皮肤
        if(this._skinView != null)
        {
            //回收进对象池
        }
        this._skinView = new BaseFoodCreatorSkin();
        Laya.stage.addChild(this._skinView);
    }

    public get skinEnum():FoodCreatorSkinEnum
    {
        return this._skinType;
    }

    public start():void
    {
        Laya.timer.loop(2000,this,this.onTimer);
    }
    private onTimer():void
    {
        this.create();
    }
    protected create():void
    {

    }
}