import request from "../../util/request"

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: null,
    current: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //console.log(`基于上个页面传来的id, 跟后端取当前页面id对应的详细信息`, options)
    wx.setNavigationBarTitle({
      title: options.name
    })
    this.getDetailInfo(options.id)
  },
  getDetailInfo(id) {
    request({
      url: `/goods/${id}`
    }).then(res => {
      this.setData({
        goods: res
      })
    })
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
  handleTap(evt) {
    //全屏预览功能
    wx.previewImage({
      current: evt.target.dataset.current,
      urls: this.data.goods.slides.map(item => `http://localhost:3000${item}`),
    })
  },
  commentTap(evt) {
    //全屏预览功能
    var id = evt.target.dataset.current[1];
    console.log(id)
    wx.previewImage({
      current: evt.target.dataset.current[0],
      urls: this.data.goods.comments[id].imgUrl.map(item => `http://localhost:3000${item}`),
    })
  },
  handleActive(evt) {
    this.setData({
      current: evt.target.dataset.index
    })
  }
})