Component({
	data: {},
	/* 
	url:导航目标地址
	cls:css的类选择器
	functionType:功能类型，对应小程序中button的open-type,默认不含特殊功能
	 */
  properties: {
		url:String,
		cls:String,
		functionType:{
			type:String,
			value:'default'
		}
	},
	methods: {
		//点击事件
		handleTap(){
			const {url,functionType} = this.properties;
			if(functionType==='default'&&url){
				wx.navigateTo({
					url,
					success: (result)=>{
						
					},
					fail: ()=>{},
					complete: ()=>{}
				});
			}
		},
		//自定义事件，用于回调
		handleCustom(res){
			this.triggerEvent('custom',res)
		}
	},
	options:{
		styleIsolation: 'apply-shared',
		multipleSlots:true
	}
})
