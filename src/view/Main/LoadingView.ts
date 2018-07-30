/**Created by the LayaAirIDE*/
module view.main{
	export class LoadingView extends ui.main.LoadingUI{
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
				
				this.bar.scaleX = this.currentP;
				this.txt.text = Math.floor(this.currentP*100) + "%";
			}
			else
			{
				this.currentP = this.targetP;
			}
			if(this.currentP == 1)
			{
				this.event(BaseEvent.COMPLETE);
				this.clearTimer(this,this.onFrame);
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
		}
	}
}