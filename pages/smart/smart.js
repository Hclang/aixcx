// pages/smart/smart.js
//获取应用实例
var app = getApp()
    
var message = '';
var text = '';

Page({
  data: {
    message : '',
    text : text
  },

  bindChange: function(e) {
        message = e.detail.value
  },
  //事件处理函数
  add: function(e) {
    console.log(message)
    text = message +"\n" + text;
    this.setData({
      text:text
    });
  },
  
  onLoad: function () {
     text = '';
  }
})
