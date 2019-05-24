//logs.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:null,
    passWord:null,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  userNameInput:function(event){
    this.setData({
      userName:event.detail.value,
    })

  },
  passWordInput:function(event){
    this.setData(
      {
        passWord:event.detail.value
      }
    )
  },
  btnclick:function(event){
    if(this.data.userName=="admin"&&this.data.passWord=="123456"){
      wx.navigateTo({
        url: '../index/index',
      })
    }
    else{
      wx.showToast({
        title: '请输入正确的用户名和密码',
      })
    }
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
