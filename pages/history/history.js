// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     contentShowIndex:-1,
      dataList:[{
        title:"祈福为主题写篇文章",
        createTime:"2023年03月15日",
        content:"服务器超时或返回异常消息，请过段时间再试。1:That model is currently overloaded with other requeist.You can retry your request,or contact us throuth our help center at help.openai.com if the error persists,(Please include the request ID adewfsefsfsdfdefefefefefeassssssss",
        goodsNum:0,
        clickGoods:false
      },{
        title:"公司活动致辞",
        createTime:"2023年03月15日",
        content:"尊敬的各位领导、同事们，大家好！今天，我们齐聚在这里，是为了参加QC小组活动经验交流的活动。首先，我代表本公司向各位来宾表示热烈的欢迎和衷心的感谢！感谢对方公司的接待和关心，让我们有机会与大家共同交流，学习对方在QC小组活动方面的先进经验，互相借鉴，共同进步。QC小组活动作为公司质量管理体系中重要的一环，是实现优质产品、提高质量水平的重要途径。本公司一直致力于推进QC小组活动，在管理方面也取得了一定的成效。但是，我们深知还有很多不足之处需要改进，因此，我们希望通过这次活动，听取各位来宾的建议和经验，寻找更好的解决方案，提高QC小组活动的水平和效率。\n在交流的过程中，我们应该积极倾听，认真思考，相互交流心得和体会，分享成功的经验和教训，扩大交流范围，积极落实QC小组活动，将其贯彻到公司的各个管理领域。同时，也希望各位来宾以本次活动为契机，相互交流，相互学习，互相借鉴，共同发扬QC活动，推进企业质量管理，创建优质品牌。\n最后，再次对各位来宾表示热烈的欢迎和衷心的感谢。愿大家在这次活动中能够取得圆满成功，交流会取得良好的成果。谢谢大家！",
        goodsNum:2,
        clickGoods:false
      },{
        title:"编一个励志的爱情故事吧",
        createTime:"2023年03月15日",
        content:"张豪杰是一个有勇气和毅力的年轻人。他有一颗充满活力和热情的心，在他的奋斗历程中，他遇到了一个美丽而温柔的女孩——李娜。\n在他们相遇的那一刻，张豪杰就被李娜的美丽和善良所吸引。他们一起度过了美好的时光，分享了彼此的快乐和悲伤，建立了深厚的感情。尽管他们在生活和兴趣上有很大的差异，但他们的爱情更加坚不可摧。\n几年后，张豪杰成为一位成功的企业家，而李娜成为了一名优秀的医生。他们的生活有着许多艰难的挑战，但他们的爱情始终没有改变。张豪杰每天都在思考着如何让李娜更加幸福和快乐。他为她策划了一次浪漫的旅行，并在那个地方向她求婚。李娜激动得流下了幸福的泪水。\n最终，他们终于走到了一起，共同建立了一个幸福的家庭。他们相互搀扶着，一起面对困难和挑战，更加深化了彼此的感情。他们的爱情像那一缕清晨霞光，光芒四射，永远照耀着彼此的心灵。他们靠着爱情走过了人生旅途中的每一个艰难险阻，一生相守，直到永远。",
        goodsNum:66,
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
  toDetails(e) {
      if (this.data.contentShowIndex == e.currentTarget.dataset.index) {
        this.setData({contentShowIndex: -1});
      } else {
        this.setData({contentShowIndex: e.currentTarget.dataset.index});
      }
  }
})