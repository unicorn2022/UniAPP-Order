// cloudfunctions/getTempUrl/index.js
const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 自动取当前环境

exports.main = async (event, context) => {
	// event 就是小程序端传过来的参数
	const { fileList } = event
	if (!fileList || !Array.isArray(fileList)) {
		return { code: -1, msg: '缺少 fileList' }
	}

	const result = await cloud.getTempFileURL({ fileList })
	return { code: 0, data: result.fileList } // 返回给小程序
}