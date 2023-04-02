// chat.js
// let toast = require('../../utils/toast.js');
const httpUtils = require('../../utils/http')
const ui = require('../../utils/ui')

let chatInput = require('../../modules/chat-input/chat-input');
var utils = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxchatLists: [],
    friendHeadUrl: '',
    // textMessage: '',
    chatItems: [],
    scrollTopTimeStamp: 0,
    height: 0,  //屏幕高度
    chatHeight:0,//聊天屏幕高度
    normalDataTime:'',
  },
//item的所有单向信息
// {
//     dataTime: '',//当前时间
//     msg_type: '',//发送消息类型
//     userImgSrc: '',//用户头像
//     textMessage: '',//文字消息
//     voiceSrc: '',//录音的路径
//     voiceTime: 0,//录音的时长
//     sendImgSrc: '',//图片路径
//   }

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    let _this = this;
    _this.initData();
      //获取屏幕的高度
      wx.getSystemInfo({
        success(res) {
          _this.setData({
            height: wx.getSystemInfoSync().windowHeight,
            chatHeight: wx.getSystemInfoSync().windowHeight-55
          })
        }
      })
    },

    initData: function () {
      let that = this;
      let systemInfo = wx.getSystemInfoSync();
      chatInput.init(this, {
          systemInfo: systemInfo,
          minVoiceTime: 1,
          maxVoiceTime: 60,
          startTimeDown: 56,
          format: 'mp3',//aac/mp3
          sendButtonBgColor: 'mediumseagreen',
          sendButtonTextColor: 'white',
          extraArr: [{
              picName: 'choose_picture',
              description: '照片'
          }, {
              picName: 'take_photos',
              description: '拍摄'
          }],
          // tabbarHeigth: 48
      });

      that.setData({
        pageHeight: systemInfo.windowHeight,
        normalDataTime: utils.formatTime(new Date()),
      });
      wx.setNavigationBarTitle({
          title: '智能助手'
      });
      that.textButton();
  },
  textButton: function () {
    const appInstance = getApp(); // 获取 App() 实例
    var that = this;
      chatInput.setTextMessageListener(function (e) {
        let content = e.detail.value;
        console.log(content);
        var list = that.data.wxchatLists;
        var temp = {
          userImgSrc: '../../image/chat/extra/3.png',
          textMessage: content,
          dataTime: utils.formatTime(new Date()),
          msg_type: 'text',
          type: 'right'
        };
        list.push(temp);

        that.setData({
          wxchatLists: list,
        })

        //非Stream调用方式
        let obj = {
          method: "GET",
          showLoading: true,
          url:'/sendMsg/',
          //url:'/sendMsg',（dev环境）
          message:"AI思考中...",
          data:{
            "content":content,
            "owner_id":appInstance.globalData.openid,
            "source": 'wx'
          }
        }

        httpUtils.request(obj).then(res=>{
          console.log(res)
          ui.showToast(res.data.code)

          var temp_left= {
            userImgSrc: '../../image/chat/extra/3.png',
            dataTime: utils.formatTime(new Date()),
            msg_type: 'text',
            type: 'left'
          };
          temp_left.answer = res.data.data.answer
          temp_left.elapsed = res.data.data.elapsed
          var list_left = that.data.wxchatLists;
          list_left.push(temp_left);

          that.setData({
            wxchatLists: list_left,
          })

        }).catch(err=>{
          console.log(err)
        });
        
  
      
      });
  },
  resetInputStatus: function () {
      chatInput.closeExtraView();
      
  },
 
  //删除单条消息
  delMsg: function (e) {
    var that = this;
    var magIdx = parseInt(e.currentTarget.dataset.index);
    var list = that.data.wxchatLists;

    wx.showModal({
      title: '提示',
      content: '确定删除此消息吗？',
      success: function (res) {
        if (res.confirm) {
          console.log(e);
          list.splice(magIdx, 1);
          that.setData({
            wxchatLists: list,
          });
          // wx.showToast({
          //   title: '删除成功',
          //   mask: true,
          //   icon: 'none',
          // })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
});