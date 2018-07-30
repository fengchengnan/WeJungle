
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.main {
    export class LoadingUI extends View {
		public txt:Laya.Label;
		public bar:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Rect","props":{"width":1136,"lineWidth":1,"height":640,"fillColor":"#50603c"}},{"type":"Label","props":{"y":299,"x":431,"width":274,"text":"Loading...","height":41,"fontSize":30,"color":"#ffffff","anchorY":0,"anchorX":0,"align":"center"}},{"type":"Label","props":{"y":576,"x":527,"width":81,"var":"txt","text":"100%","height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Rect","props":{"y":554,"x":129,"width":878,"lineWidth":1,"height":16,"fillColor":"#ffffff"}},{"type":"Box","props":{"y":556,"x":131,"var":"bar"},"child":[{"type":"Rect","props":{"width":874,"lineWidth":1,"height":12,"fillColor":"#848484"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.main.LoadingUI.uiView);

        }

    }
}

module ui.main {
    export class StartPanelUI extends View {
		public startBtn:Laya.Button;
		public nameInput:Laya.TextInput;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Button","props":{"width":288,"var":"startBtn","skin":"comp/button.png","sizeGrid":"4,4,4,4","labelSize":25,"labelPadding":"0","labelFont":"Microsoft YaHei","labelBold":true,"labelAlign":"center","label":"开始","height":80,"centerY":53,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"TextInput","props":{"width":288,"var":"nameInput","type":"text","skin":"comp/textinput.png","prompt":"请输入名字...","overflow":"hidden","height":56,"fontSize":25,"font":"Microsoft YaHei","centerY":-76,"centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.main.StartPanelUI.uiView);

        }

    }
}
