
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    //canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    canIUseOpenData:false,
    lists:[
      {
        name:"关于我们",
        image:"../../images/icons/question.png",
        page:"aboutus"
      }
    /* ,{
      name:"VIP会员",
      image:"../../images/icons/vip.png",
      page:"vippage"
    }

   ,{
      name:"使用教程",
      image:"../../images/icons/like_fill.png",
      page:"usedpage"
    },{
      name:"客服留言",
      image:"../../images/icons/service.png",
      page:"guestpage"
    }*/
    
    ]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: ''
    })
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '个人中心'
  });
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },


  vippage(){
    wx.navigateTo({
      url: '../vip/vip',
    })
  },
  usedpage(){
    wx.navigateTo({
      url: '../vip/vip',
    })
  },
  guestpage(){
    wx.navigateTo({
      url: '../vip/vip',
    })
  },
  aboutus(){
    wx.navigateTo({
      url: '../aboutus/aboutus',
    })
  }
})
