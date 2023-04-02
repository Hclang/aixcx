const httpUtils = require('/utils/http')
// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res.code)
        if (res.code) {
          let obj = {
            method: "GET",
            showLoading: true,
            url:'/wx/session',
            data:{
              "code":res.code
            }
          }
          httpUtils.request(obj).then(res=>{
            console.log(res)
            this.globalData.openid = res.data.data.openid

          }).catch(err=>{
            console.log(err)
          });

        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    openid: null
  }
})
