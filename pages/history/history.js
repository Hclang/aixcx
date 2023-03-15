// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      dataList:[{
        title:"祈福为主题写篇文章",
        createTime:"2023年03月15日",
        content:"服务器超时或返回异常消息，请过段时间再试。1:That model is currently overloaded with other requeist.You can retry your request,or contact us throuth our help center at help.openai.com if the error persists,(Please include the request ID adewfsefsfsdfdefefefefefeassssssss",
        goodsNum:0,
        clickGoods:false
      },{
        title:"学前教育的需求侧包括哪些方面",
        createTime:"2023年03月15日",
        content:"1.家长对学前教育的需求：对幼儿教育的基本了解，早期教育的优势、育儿知识的学习、学前教育制度了解等。2.社会对学前教育的需求：社会对幼儿才艺、社交的充分学习",
        goodsNum:123,
        clickGoods:true
      },{
        title:"祈福为主题写篇文章",
        createTime:"2023年03月15日",
        content:"服务器超时或返回异常消息，请过段时间再试。1:That model is currently overloaded with other requeist.You can retry your request,or contact us throuth our help center at help.openai.com if the error persists,(Please include the request ID adewfsefsfsdfdefefefefefeassssssss",
        goodsNum:0,
        clickGoods:false
      },{
        title:"学前教育的需求侧包括哪些方面",
        createTime:"2023年03月15日",
        content:"1.家长对学前教育的需求：对幼儿教育的基本了解，早期教育的优势、育儿知识的学习、学前教育制度了解等。2.社会对学前教育的需求：社会对幼儿才艺、社交的充分学习",
        goodsNum:123,
        clickGoods:true
      },{
        title:"直径为21厘米的圆 自身周长是多少 内接正五边形的周长是多少 内接正三角形的周长又是多少 请直接给出答案",
        createTime:"2023年03月15日",
        content:"1.家长对学前教育的需求：对幼儿教育的基本了解，早期教育的优势、育儿知识的学习、学前教育制度了解等。2.社会对学前教育的需求：社会对幼儿才艺、社交的充分学习",
        goodsNum:123,
        clickGoods:true
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '历史记录'
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
  toDetails() {
      wx.navigateTo({
        url: '/pages/history-details/history-details',
      })
  }
})