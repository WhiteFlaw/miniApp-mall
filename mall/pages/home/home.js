import request from "../../util/request";
Page({

  data: {
    looplist: [],
    goodlist: [],
  },
  current: 1,
  total: 0,

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

  onReachBottom() {
    if (this.data.goodlist.length === this.total) {
      return;
    }
    this.current++;
    this.renderGoods();
  },

  handleEvent() {
    console.log("toSearch");
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  handleChangePage(evt) {
    var id = evt.currentTarget.dataset.id
    var name = evt.currentTarget.dataset.name
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}&name=${name}`,
    })
  }
})