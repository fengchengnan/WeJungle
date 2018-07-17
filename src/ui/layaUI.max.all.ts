
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.Main {
    export class StartPanelUI extends View {
		public startBtn:Laya.Button;
		public nameInput:Laya.TextInput;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Button","props":{"width":288,"var":"startBtn","skin":"comp/button.png","sizeGrid":"4,4,4,4","labelSize":25,"labelPadding":"0","labelFont":"Microsoft YaHei","labelBold":true,"labelAlign":"center","label":"开始","height":80,"centerY":53,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"TextInput","props":{"width":288,"var":"nameInput","type":"text","skin":"comp/textinput.png","prompt":"请输入名字...","overflow":"hidden","height":56,"fontSize":25,"font":"Microsoft YaHei","centerY":-76,"centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.Main.StartPanelUI.uiView);

        }

    }
}
