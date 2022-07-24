// pages/search/search.js
const { default: request } = require('../../util/request');
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  
  onLoad(options) {
    this.setData({
      search: this.search.bind(this)
    })
  },

  search: function (value) {
    return Promise.all([
      request({
        url: `/categories?title_like=${value}`  //xxx_like可能是url自带的检索机制
      }),
      request({
        url: `/goods?title_like=${value}`
      })
    ]).then((res) => {
      console.log(res)  //id, title, class
      return [
        ...res[0].map(item => ({
          ...item,
          text: item.title,
          type: 1   //靠,昨晚没加这条现在searchlist怎么都进不去, 我还以为是db的问题
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
    if (e.detail.item.type === 1) {
      wx.navigateTo({  //拥有type属性表示用户进入了某类, 而非具体商品,所以跳searchlist
        url: `/pages/searchlist/searchlist?id=${e.detail.item.id}&name=${e.detail.item.title}`,
        //传分类id和分类名到searchlist的options里
      })
    } else {
      wx.navigateTo({   //正常情况选择商品, 直接跳到detail
        url: `/pages/detail/detail?id=${e.detail.item.id}&name=${e.detail.item.title}`
      })
    }
  }
})