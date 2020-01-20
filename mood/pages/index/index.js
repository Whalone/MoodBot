//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello, you are...',
    userInfo: {},
    hasUserInfo: false,
    showHeart: false
  },

  onLoad: function () {
    console.log('Load');
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        motto: 'Hello ' + app.globalData.userInfo.nickName,
        hasUserInfo: true,
        showHeart: true
      })
    } else {

      app.userInfoReadyCallback = res => {
        console.log(res);
        if (res) {
          this.setData({
            userInfo: res.userInfo,
            motto: 'Hello ' + res.userInfo.nickName,
            hasUserInfo: true,
            showHeart: true
          })
        } else {
          wx.navigateTo({
            url: '../authorize/authorize',
          })
        }
      }
    }
  },
  onShow: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        motto: 'Hello ' + app.globalData.userInfo.nickName,
        hasUserInfo: true,
        showHeart: true
      })
    }
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      motto: 'Hello ' + e.detail.userInfo.nickName,
      hasUserInfo: true,
      showHeart: true
    })

    setTimeout(function () {
      wx.switchTab({
        url: '../menu/menu',
      });
    }, 2000);

  }
})