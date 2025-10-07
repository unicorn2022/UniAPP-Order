Page({
	data: {},
	
	onLoad: function (options) {
		this.getBanners()
	},

	async getBanners() {
		// 1. 查出原始数据
		const { data } = await wx.cloud.database().collection('shop_banners').get()
		// 2. 抽出所有 cloud 文件 ID
        const fileList = data.map(item => item.cover)
		if (!fileList.length) return
		// 3. 一次性换临时 URL
        const res = await wx.cloud.getTempFileURL({ fileList })
        console.log("getTempFileURL:", res)
		// 4. 拼回 https 地址
		const bannerList = data.map((item, idx) => ({
			...item,
			coverUrl: res.fileList[idx].tempFileURL
		}))
		// 5. 设置属性
		this.setData({ bannerList })
	}
})