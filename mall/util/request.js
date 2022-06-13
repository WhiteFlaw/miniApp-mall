function request(params, isHeader = false) {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: 'Loading',
    })
    wx.request({
      ...params,
      url: 'http://localhost:3000' + params.url,
      success: (res) => {
        if (isHeader) {
          let totalCount = res.header["X-Total-Count"]
          resolve({
            list: res.data,
            total: totalCount
          })
        } else {
          resolve(res.data);
        }
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        wx.hideLoading({
          success: (res) => { },
        })
      }
    })
  })
}

export default request