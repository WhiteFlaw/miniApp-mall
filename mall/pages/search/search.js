// pages/search/search.js
const { default: request } = require('../../util/request');
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      search: this.search.bind(this)
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
  search: function (value) {
    return Promise.all([
      request({
        url: `/categories?title_like=${value}`
      }),
      request({
        url: `/goods?title_like=${value}`
      })
    ]).then((res) => {
      return [
        ...res[0].map(item => ({
          ...item,
          text: item.title
        })),
        ...res[1].map(item => ({
          ...item,
          text: item.title
        }))
      ]
    })
  },
  selectResult: function (e) {
    console.log("select Result", e.detail)
  }
})