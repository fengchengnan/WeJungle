/*
* 红色食物刷新点;
*/
class RedFoodCreator extends BaseFoodCreator
{
    private _radius:number;

    constructor(max:number)
    {
        super(FoodTypeEnum.Red,max,FoodCreatorSkinEnum.Red);

        this.radius = FoodCreatorConst.BaseRadius;
    }
    /**
     * 食物刷新点的半径
     */
    public set radius(v:number)
    {
        this._radius = v;
        let scale:number = v/FoodCreatorConst.BaseRadius;
        if(this._skinView != null)
        {
            this._skinView.scaleX = this._skinView.scaleY = scale;
        }
    }

    protected create():void
    {
        let r:number = Math.random()*360 * Math.PI/180;
        let x:number = Math.cos(r)*this._radius + this.position.x;
        let y:number = Math.sin(r)*this._radius + this.position.y;
        
        FoodFactory.createByParam(this._foodType,x,y,this);
    }
}

//
//
//
//
class FoodCreatorConst
{
    /**
     * 食物生成点的基础半径，其它的大小基于这个进行缩放
     */
    public static BaseRadius:number = 100;
}