/**Created by the LayaAirIDE*/
module view.Main{
	export class LoadingView extends ui.Main.LoadingUI
	{
		private currentP:number;
		private targetP:number;
		private scaleSpeed:number = 0.01;
		
		constructor(){
			super();			
		}
		
		/**
		 * 每次显示时的初始化
		 */
		public show():void
		{
			this.currentP = 0;
			this.targetP = 0;
			this.progress(0,100);
			this.frameLoop(1,this,this.onFrame);
		}

		private onFrame():void
		{
			//console.log(1);
			if(this.currentP < this.targetP)
			{
				this.currentP += this.scaleSpeed;
			}
			else
			{
				this.currentP = this.targetP;
			}
		}

		public hide():void
		{
			this.clearTimer(this,this.onFrame);
		}
		/**
		 * 显示进度条百分比
		 */
		public progress(current:number,total:number):void
		{
			if(current > total)
			{
				current = total;
			}
			this.targetP = current/total;
			this.bar.scaleX = this.currentP;
			this.txt.text = Math.floor(this.currentP*100) + "%";
		}
	}
}