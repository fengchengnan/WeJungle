
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
            LoadingPanel.progress(0.5, 1);
            SceneManager._currScene = SceneManager._sceneDic.get(sceneType) as BaseScene;
            SceneManager._currScene.once(SceneEvent.PRELOAD_COMPLETE, SceneManager, SceneManager.onScenePreloadComplete)
            SceneManager._currScene.preload();
        }
        else
        {
            SceneManager._currScene.clear();
            if(SceneManager._currScene.type == sceneType)
            {
                LoadingPanel.progress(0.9, 1);
                SceneManager._currScene.once(SceneEvent.INIT_COMPLETE, SceneManager, SceneManager.onSceneInitComplete)
                SceneManager._currScene.init();
            }
            else
            {
                LoadingPanel.progress(0.5, 1);
                SceneManager._currScene = SceneManager._sceneDic.get(sceneType) as BaseScene;
                SceneManager._currScene.once(SceneEvent.PRELOAD_COMPLETE, SceneManager, SceneManager.onScenePreloadComplete)
                SceneManager._currScene.preload();
            }
        }
    }


    private static onScenePreloadComplete(evt:SceneEvent):void
    {
        LoadingPanel.progress(0.9, 1);
        SceneManager._currScene.once(SceneEvent.INIT_COMPLETE, SceneManager, SceneManager.onSceneInitComplete)
        SceneManager._currScene.init();
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