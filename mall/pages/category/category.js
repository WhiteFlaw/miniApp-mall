import request from '../../util/request';
Page({
  data: {
    vtabs: [],   //vtabs会自动选取每条数据里面的title生成选项, 只需要传入数组即可
    activeTab: 0,
  },

  onLoad() {
    request({ url: "/categories?_embed=goods" }).then((res) => {
      //console.log(...res);
      this.setData({
        vtabs: res
      })
      console.log(this.data.vtabs);
    });
  },

  onTabCLick(e) {
    const index = e.detail.index
    console.log('tabClick', index)
  },

  onChange(e) {
    const index = e.detail.index
    console.log('change', index)
  },

  handleTap: function (e) {
    console.log(e.currentTarget.dataset.id);
    const id = e.currentTarget.dataset.id;
    const name = e.currentTarget.dataset.name;

    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}&name=${name}`
    })
  }

})
