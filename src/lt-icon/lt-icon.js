
Component({
	data: {},
	/* 
	iconSrc:图片路径
	size:图标尺寸，对于字体图标指的是font-size，对于图片图标指的是宽高
	iconType:图标类型，只对字体图标有效 
	color:图标颜色，只对字体图标有效
	*/
  properties: {
		iconSrc:String,
		size:{
			type:String,
			value:'40rpx'
		},
		iconType:String,
		color:{
			type:String,
			value:'#111111'
		}
	},
	methods: {},
	options:{
		styleIsolation: 'apply-shared'
	}
})


