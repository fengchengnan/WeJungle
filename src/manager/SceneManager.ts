
/*
* name;
*/
class SceneManager{
    private static _sceneDic:Dictionary;
    private static _currScene:BaseScene;

    public static setUp():void
    {
        SceneManager._sceneDic = new Dictionary();
        let uiScene:UIScene = new UIScene();
        SceneManager._sceneDic.set(EnumSceneType.uiScene, uiScene);
        let battleScene:BattleScene = new BattleScene();
        SceneManager._sceneDic.set(EnumSceneType.battleScene, battleScene);
    }

    public static show(sceneType:EnumSceneType  ):void
    {
        LoadingPanel.show();
        
        if(SceneManager._currScene == null)
        {
            SceneManager._currScene = SceneManager._sceneDic.get(sceneType) as BaseScene;
            SceneManager._currScene.once(SceneEvent.PRELOAD_COMPLETE, SceneManager, SceneManager.onScenePreloadComplete)
            SceneManager._currScene.preload();
            LoadingPanel.progress(0.5, 1);
        }
        else
        {
            SceneManager._currScene.clear();
            if(SceneManager._currScene.type == sceneType)
            {
                SceneManager._currScene.init();
                LoadingPanel.progress(0.9, 1);
            }
            else
            {
                SceneManager._currScene = SceneManager._sceneDic.get(sceneType) as BaseScene;
                SceneManager._currScene.once(SceneEvent.PRELOAD_COMPLETE, SceneManager, SceneManager.onScenePreloadComplete)
                SceneManager._currScene.preload();
                LoadingPanel.progress(0.5, 1);
            }
        }
    }


    private static onScenePreloadComplete(evt:SceneEvent):void
    {
        SceneManager._currScene.once(SceneEvent.PRELOAD_COMPLETE, SceneManager, SceneManager.onScenePreloadComplete)
        SceneManager._currScene.init();
        LoadingPanel.progress(0.9, 1);
    }

    private static onSceneInitComplete(evt:SceneEvent):void
    {
        LoadingPanel.instance.once(BaseEvent.COMPLETE, SceneManager, SceneManager.onLoadingProgressComplete);
        LoadingPanel.progress(1, 1);
    }

    private static onLoadingProgressComplete(event:BaseEvent):void
    {
        SceneManager._currScene.show();
    }

    public static update():void
    {
        if(SceneManager._currScene == null)
        {
            return;
        }
        if(SceneManager._currScene.isStart)
        {
            SceneManager._currScene.update();
        }
    }
}