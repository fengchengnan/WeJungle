/*
* 创建具体食物的工厂;
*/
class FoodFactory{
    constructor(){

    }
    /**
     * 创建一个食物
     * @param type 
     */
    public static create(type:FoodTypeEnum):BaseFood
    {
        return new BaseFood();
    }
    /**
     * 根据一定参数创建食物，自动设置好坐标，上下显示屋级关系
     * @param type 食物类型
     * @param x 
     * @param y 
     * @param parent 所属父级的生成点，要显示在生成点的下方
     */
    public static createByParam(type:FoodTypeEnum,x:number,y:number,parent:BaseFoodCreator):BaseFood
    {
        let food:BaseFood = FoodFactory.create(type);
        food.position = new Vector2(x,y);
        Laya.stage.addChild(food.view);
        return food;
    }
}