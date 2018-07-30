import BaseEvent = laya.events.Event;
/*
* name;
*/
class SceneEvent extends BaseEvent{
    public static PRELOAD_COMPLETE:string = "preloadComplete";
    public static INIT_COMPLETE:string = "initComplete";

    constructor(){
        super();
    }
}