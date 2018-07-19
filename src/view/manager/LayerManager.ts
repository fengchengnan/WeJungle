/*
* 层级管理;
*/
class LayerManager
{
    private static _topLayer:UICanvas;
    private static _uiLayer:UICanvas;
    constructor(){

    }


    
    public static setup()
    {
        var canvas:UICanvas = new UICanvas();
        canvas.setPixelSize(1136,640);
        LayerManager._topLayer = canvas;

        canvas = new UICanvas();
        canvas.setPixelSize(1136,640);
        LayerManager._uiLayer = canvas;

        Laya.stage.addChild(LayerManager._uiLayer);
        Laya.stage.addChild(LayerManager._topLayer);
    }
    /**
     * 最顶层容器
     */
    public static get topLayer():UICanvas
    {
        return LayerManager._topLayer;
    }
    /**
     * UI层容器
     */
    public static get uiLayer():UICanvas
    {
        return LayerManager._uiLayer;
    }
}