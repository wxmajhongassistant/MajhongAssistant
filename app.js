//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: {
      openID:1
    },
    gameInfo: {
      state:0,//当前对局状态（0表示未完成，1表示已完成）
      halforwhole: null,
      maxTime:4,//最大进行场次数（counter增加maxTime也增加）
      time:0,//当前进行到的巡数
      shareInfo:{
        //0-自家，1-下家，2-对家，3-上家
        eastSeat: 3, //东家
        //0-东，1-南，2-西
        prevalent: 0, //场风
        counter: 2, //X本场
        lastRichi: 2, //场上剩余立直棒

      },
      winningInfo: {
        //[自家，下家，对家，上家]
        richi: [false, true, false, true], //立直
        winning: [false, false, false, true], //和牌
        //0-自家，1-下家，2-对家，3-上家

        discard: 2, //放铳
        
       
      },
      scores:[
        [25000,25000,25000,25000],[],[],[]
      ]//每局得分纪录
      , 
      drawInfo: {
        //[自家，下家，对家，上家]
        richi: [false, true, false, true], //立直
          readyHand: [false, false, false, true], //听牌
      }



    
  }
}
})