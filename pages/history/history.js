// pages/history/history.js
const httpUtils = require('../../utils/http')
const ui = require('../../utils/ui')
var utils = require("../../utils/util.js")

const appInstance = getApp(); // 获取 App() 实例

Page({

  /**
   * 页面的初始数据
   */
  data: {
     contentShowIndex:-1,
     lastClickTime: 0, //上次点击时间
      dataList:[
        /**{
        title:"祈福为主题写篇文章",
        createTime:"2023年03月15日",
        content:"服务器超时或返回异常消息，请过段时间再试。",
        goodsNum:0,
        clickGoods:false
      }**/
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   
    wx.setNavigationBarTitle({
      title: '最近10条历史记录'
    });

    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.chatLog()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.chatLog()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  chatLog() {

    this.setData({
      dataList: [],
    })

    let obj = {
      method: "GET",
      showLoading: true,
      url:'/chatLog/all',
      message:"获取记录中...",
      data:{
        "owner_id":appInstance.globalData.openid,
        "page":1,
        "per_page":10
      }
    }
  
    httpUtils.request(obj).then(res=>{
      console.log(res)
      ui.showToast(res.data.code)
      var list_history = this.data.dataList;
      
      for (let index = 0; index < res.data.data.items.length; index++) {
        const element = res.data.data.items[index];
        console.log(element)
  
        var temp= {
          title:element.question,
          createTime:element.create_time,
          content:element.answer,
          goodsNum:0,
          clickGoods:false
        };
        list_history.push(temp);
      }
   
      this.setData({
        dataList: list_history,
      })
  
    }).catch(err=>{
      console.log(err)
    });
    
  },

  toDetails(e) {
      
      if (this.data.contentShowIndex == e.currentTarget.dataset.index) {
        if (this.data.lastClickTime > 0 && e.timeStamp - this.data.lastClickTime < 600) {
            console.log("双击事件");
            wx.setClipboardData({
              data: e.currentTarget.dataset.content,
              success: function(res) {
                wx.showToast({
                  title: '复制成功',
                  icon: "none",
                  mask: "true"
                })
              }
            })
        } else {
          this.setData({contentShowIndex: -1});
        }
      } else {
        this.setData({contentShowIndex: e.currentTarget.dataset.index});
      }
      this.setData({
        lastClickTime: e.timeStamp
      });
  }
})