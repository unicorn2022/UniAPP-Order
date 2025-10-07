// pages/index/bannerContent/bannerContent.js
Page({
    data: {

    },

    onLoad(options) {
        let bannerID = options.bannerID
        
        // 1. 根据传输的 bannerID 查询轮播图数据
        wx.cloud.database().collection('shop_banners').doc(bannerID).get()
        .then(res => {
            this.setData({
                banner: res.data
            })
        })
    }
})