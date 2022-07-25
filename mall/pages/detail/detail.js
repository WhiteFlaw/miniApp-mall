import checkAuth from "../../util/auth"
import request from "../../util/request"

// pages/detail/detail.js
Page({
  data: {
    goods: null,
    current: 0,
  },

  onLoad(options) {
    //console.log(`基于上个页面传来的id, 跟后端取当前页面id对应的详细信息`, options)
    wx.setNavigationBarTitle({
      title: options.name
    })
    this.getDetailInfo(options.id)
  },

  getDetailInfo: function (id) {
    request({
      url: `/goods/${id}`
    }).then(res => {
      this.setData({
        goods: res
      })
    })
  },

  handleTap: function (evt) {
    //全屏预览功能
    wx.previewImage({
      current: evt.target.dataset.current,
      urls: this.data.goods.slides.map(item => `http://localhost:3000${item}`),
    })
  },

  commentTap: function (evt) {
    //全屏预览功能
    var id = evt.target.dataset.current[1];
    console.log(id)
    wx.previewImage({
      current: evt.target.dataset.current[0],
      urls: this.data.goods.comments[id].imgUrl.map(item => `http://localhost:3000${item}`),
    })
  },

  handleActive: function (evt) {
    this.setData({
      current: evt.target.dataset.index
    })
  },

  toShopcar: function () {
    wx.switchTab({
      url: '/pages/shopcar/shopcar',
    })
  },

  handleAdd: function () {
    checkAuth(() => {
      console.log("请求加入购物车");
    })
  }
})