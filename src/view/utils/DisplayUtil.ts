/*
* name;
*/
class DisplayUtil{
    constructor(){

    }
    /**
     * 移除一个对象
     * @param dis 需要被移除的对象
     */
    public static removeSprite(dis:Sprite):void
    {
        if(dis == null) return;

        dis.removeSelf();
    }
}