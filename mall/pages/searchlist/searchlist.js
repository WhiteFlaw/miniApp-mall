import request from "../../util/request"

// pages/searchlist/searchlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)  //分类名, 分类id
    wx.setNavigationBarTitle({
      title: options.name,
    })
    this.getList(options.id) 
  },
  getList(id) {  //依据分类id请求分类下商品
    console.log(id)
    request({
      url: `/categories/${id}?_embed=goods` //为什么会去自动匹配categoryId?
    }).then((res) => {
      console.log(res)
      this.setData({
        goodList: res.goods
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

  }
})