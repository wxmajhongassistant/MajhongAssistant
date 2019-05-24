//eastChoose
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    halforwhole:false,//半场false，全场true
    
  },
  changechoose:function(event){
    if(event.detail.value=="half"){
      this.setData({
        halforwhole:false
      })

    }else{
      this.setData({
        halforwhole:true
      })
    }
    console.log(this.data.halforwhole)


  },
  btnclick:function(){
    if(this.data.halforwhole){
      app.globalData.gameInfo.halforwhole=true;
    }else{
      app.globalData.gameInfo.halforwhole = false;
    }
    wx.redirectTo({
      url: '../startround/startround',
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})