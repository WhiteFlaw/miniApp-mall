import request from "../../util/request"

Page({
  data: {
    goodList: [],
    priceOrder: true,
    commentOrder: true
  },

  onLoad: function (options) {
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
      this.setData({
        goodList: res.goods
      })
    })
  },
  handlePrice() {
    this.priceOrder = !this.priceOrder
    this.setData({
      goodList: this.priceOrder ? this.data.goodList.sort((item1, item2) => {
        item1.price - item2.price
      }) : this.data.goodList.sort((item1, item2) => {
        item2.price - item1.price
      })
    })
  },
  handleComment() {
    this.commentOrder = !this.commentOrder
    this.setData({
      goodList: this.commentOrder ? this.data.goodList.sort((item1, item2) => {
        item1.goodcomment - item2.goodcomment
      }) : this.data.goodList.sort((item1, item2) => {
        item2.goodcomment - item1.goodcomment
      })
    })
  }
})