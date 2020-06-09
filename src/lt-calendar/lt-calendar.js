

Component({
  externalClasses: [''],
  properties: {
    displayMonthNum: {
      type: Number
    },
    displayTime: {
      type: String
    },
    selectedDate: {
      type: String
		}
  },
  data: {
    weekDayArr: ['日', '一', '二', '三', '四', '五', '六'],
  },

  attached: function () {
    //console.log(this)
    // debugger
  },
  methods: {
		
		onCalendarDayTap: function (e) {
			let data = e.currentTarget.dataset;
			var date = new Date(data.year, data.month, data.day);
	
			this.triggerEvent('daytap',{date})
		},
		handlePrev:function(){
			this.triggerEvent('prevmonth')
		},
		handleNext:function(){
			this.triggerEvent('nextmonth')
		}
  }
})