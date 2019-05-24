//scoreList
// pages/startround/startround.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score:[
    [25000,25000,25000,25000],{
        zijia: 25000,
        duijiaL: 25000,
        shangjia: 25000,
        xiajia: 25000
    },
    {
      zijia: 25000,
      duijiaL: 25000,
      shangjia: 25000,
      xiajia: 25000

    },
    {
      zijia: 25000,
      duijiaL: 25000,
      shangjia: 25000,
      xiajia: 25000

    },],
    time:0

  },

  btnhepai:function(){
    this.setData({
      time: this.data.time + 1
    });
    wx.navigateTo({
      url: '../seats/seats',
    })



  },
  btnhuangpai:function(){
    this.setData({
      time:this.data.time+1
    })
    wx.navigateTo({
      url: '../seats/seats',
    })
  },
  btnstop:function(){
    wx.redirectTo({
      url: '../index/index',
    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      time:getApp().globalData.gameInfo.time+1
    })

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