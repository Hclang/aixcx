// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
 
  },
  // 事件处理函数
  smart() {
    wx.navigateTo({
      url: '../chat/chat'
    })
  },

  business() {
    wx.navigateTo({
      url: '../smart/smart'
    })
  },

  science() {
    wx.navigateTo({
      url: '../smart/smart'
    })
  },

  think() {
    wx.navigateTo({
      url: '../smart/smart'
    })
  },

  article() {
    wx.navigateTo({
      url: '../smart/smart'
    })
  }
})
