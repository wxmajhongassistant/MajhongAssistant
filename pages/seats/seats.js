//winningChoose

Page({

  /**
   * 页面的初始数据
   */
  data: {
    state:"选择立直",
    ishide:'true',
    theList:[0 ,0 ,0 ,0 ],
    color0:'#eee',
    color1: '#eee',
    color2: '#eee',
    color3: '#eee',
    sureTimes:0,
    lizhi:[0,0,0,0],
    tingpai:[0,0,0,0],
    hupai:[0,0,0,0],
    fangtong:[0,0,0,0],
  },

  f0:function(event){
      this.setData({
        color0: this.data.color0=='gray'?'#eee':'gray',
        theList: [(this.data.theList[0] == 0) ? 1 : 0, this.data.theList[1], this.data.theList[2], this.data.theList[3]],      
      })
    console.log(this.data.theList)
  },

  f1: function (event) {
    this.setData({
      color1: this.data.color1 == 'gray' ? '#eee' : 'gray',
      theList: [this.data.theList[0], (this.data.theList[1] == 0) ? 1 : 0, this.data.theList[2], this.data.theList[3]],
    })
    console.log(this.data.theList)
  },

  f2: function (event) {
    this.setData({
      color2: this.data.color2 == 'gray' ? '#eee' : 'gray',
      theList: [this.data.theList[0], this.data.theList[1], (this.data.theList[2] == 0) ? 1 : 0, this.data.theList[3]],
    })
    console.log(this.data.theList)
  },

  f3: function (event) {
    this.setData({
      color3: this.data.color3 == 'gray' ? '#eee' : 'gray',
      theList: [this.data.theList[0], this.data.theList[1], this.data.theList[2], (this.data.theList[3] == 0) ? 1 : 0]
    })
    console.log(this.data.theList)
  },

  sure: function (event) {
    if(this.data.sureTimes==0){
      this.setData({
        lizhi: this.data.theList,
        ishide:'',
        sureTimes:1,
        state:'选择听牌',
        theList:[0,0,0,0],
        color0: '#eee',
        color1: '#eee',
        color2: '#eee',
        color3: '#eee'
      })
    }
    else if (this.data.sureTimes == 1) {
      this.setData({
        tingpai: this.data.theList,
        sureTimes: 2,
        ishide: 'true',
        state: '选择胡牌',
        theList: [0, 0, 0, 0],
        color0: '#eee',
        color1: '#eee',
        color2: '#eee',
        color3: '#eee'
      })
    }

    else if (this.data.sureTimes == 2) {
      this.setData({
        fangtong: this.data.theList,
        sureTimes: 3,
        state: '选择放统',
        theList: [0, 0, 0, 0],
        color0: '#eee',
        color1: '#eee',
        color2: '#eee',
        color3: '#eee'
      })
    }
    else{
      // todo
      wx.navigateTo({
        url: '../suanfen/suanfen',
      })
    }
  },
  liuju:function(event){
      //todo
      wx.navigateBack({
        delta:1
      })
  }
})
  