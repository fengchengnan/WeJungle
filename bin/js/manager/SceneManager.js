/*
* name;
*/
var SceneManager = /** @class */ (function () {
    function SceneManager() {
    }
    SceneManager.setUp = function () {
        SceneManager._sceneDic = new Dictionary();
        var uiScene = new UIScene();
        SceneManager._sceneDic.set(EnumSceneType.uiScene, uiScene);
        var battleScene = new BattleScene();
        SceneManager._sceneDic.set(EnumSceneType.battleScene, battleScene);
    };
    SceneManager.show = function (sceneType) {
        LoadingPanel.show();
        if (SceneManager._currScene == null) {
            SceneManager._currScene = SceneManager._sceneDic.get(sceneType);
            SceneManager._currScene.once(SceneEvent.PRELOAD_COMPLETE, SceneManager, SceneManager.onScenePreloadComplete);
            SceneManager._currScene.preload();
            LoadingPanel.progress(0.5, 1);
        }
        else {
            SceneManager._currScene.clear();
            if (SceneManager._currScene.type == sceneType) {
                SceneManager._currScene.init();
                LoadingPanel.progress(0.9, 1);
            }
            else {
                SceneManager._currScene = SceneManager._sceneDic.get(sceneType);
                SceneManager._currScene.once(SceneEvent.PRELOAD_COMPLETE, SceneManager, SceneManager.onScenePreloadComplete);
                SceneManager._currScene.preload();
                LoadingPanel.progress(0.5, 1);
            }
        }
    };
    SceneManager.onScenePreloadComplete = function (evt) {
        SceneManager._currScene.once(SceneEvent.PRELOAD_COMPLETE, SceneManager, SceneManager.onScenePreloadComplete);
        SceneManager._currScene.init();
        LoadingPanel.progress(0.9, 1);
    };
    SceneManager.onSceneInitComplete = function (evt) {
        LoadingPanel.instance.once(BaseEvent.COMPLETE, SceneManager, SceneManager.onLoadingProgressComplete);
        LoadingPanel.progress(1, 1);
    };
    SceneManager.onLoadingProgressComplete = function (event) {
        SceneManager._currScene.show();
    };
    SceneManager.update = function () {
        if (SceneManager._currScene == null) {
            return;
        }
        if (SceneManager._currScene.isStart) {
            SceneManager._currScene.update();
        }
    };
    return SceneManager;
}());
//# sourceMappingURL=SceneManager.js.map