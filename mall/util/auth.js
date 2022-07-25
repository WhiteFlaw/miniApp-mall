function checkAuth(callback) {
    if (wx.getStorageSync('tel')) {  //如果本地没有电话号就去else
        callback();
    } else {  //else: 检查token, 有token就去手机号绑定界面, 没有就
        if (wx.getStorageSync('token')) {
            wx.navigateTo({
                url: "/pages/telform/telform"
            })
        } else {
            wx.navigateTo({   //啥也没有就跳到授权页面
                url: "/pages/telform/telform"   //做完记得把这里改回导向auth页面
            })
        }
    }
}

export default checkAuth