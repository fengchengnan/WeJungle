/*
* 食物点的外观表现;
*/
class BaseFoodCreatorSkin extends laya.display.Sprite
{
    constructor()
    {
        super();
        this.graphics.drawCircle(0,0,FoodCreatorConst.BaseRadius,"#ffffff");
    }
}