import request from "../../util/request";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    looplist: [],
    goodlist: [],
  },
  current: 1,
  total: 0,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.renderSwiper()
    this.renderGoods()
  },
  renderSwiper() {
    request({
      url: "/recommends",
    }).then((res) => {
      this.setData({
        looplist: res
      })
    })
  },
  renderGoods() {
    request({
      url: `/goods?_page=${this.current}&_limit=5`,
    }, true).then((res) => {
      this.total = Number(res.total);
      this.setData({
        goodlist: [...this.data.goodlist, ...res.list]
      })
    })
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
    if (this.data.goodlist.length === this.total) {
      console.log("thats all")
      return;
    }
    this.current++;
    this.renderGoods();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  handleEvent() {
    console.log("handleEvent")
  },

  handleChangePage(evt) {
    var id = evt.currentTarget.dataset.id
    var name = evt.currentTarget.dataset.name
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}&name=${name}`,
    })
  }
})