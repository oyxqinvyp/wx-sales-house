import {
	useStore
} from '@/stores/index.js'

let loginRetry = false
const interceptors = {
	request(config) {
		const store = useStore()
		const baseUrl = 'http://api-test.tomatocross.cn:18888/'
		// const baseUrl = 'https://api.xhsnw.com/'
		let url = baseUrl + config.url
		if (config.url.indexOf('http') > -1) {
			url = config.url
		}
		const data = config.data
		return {
			...config,
			data,
			url,
			header: {
				token: store.token || '',
				...(config.header || {})
			}
		}
	},
	response(config, res) {
		return res
	}
}
const uniRequest = (config) => {
	return new Promise((resolve, reject) => {
		const store = useStore()
		const config_ = interceptors.request(config)
		uni.request({
			...config_
		}).then((res) => {
			if (res.data.code === 200) {
				resolve(interceptors.response(config_, res))
			} else {
				if (store.token) {
					uni.showToast({
						icon: 'none',
						title: res.data.msg || '网络连接失败'
					})
					if (res.data.code === 401) {
						if (store.token && !loginRetry) {
							loginRetry = true
							// setTimeout(() => {
							// 	uni.login({
							// 		success: async function(res) {
							// 			if (res.errMsg === 'login:ok') {
							// 				const result = await codeLogin({
							// 					code: res.code
							// 				}).catch((err) => {})
							// 				if (result.data.data && result.data.data.token) {
							// 					loginRetry = false
							// 					store.token = result.data.data.token
							// 					store.userInfo = {
							// 						...result.data.data.userInfo,
							// 						phoneNumber: result.data.data?.userInfo?.phone
							// 					}
							// 					uni.reLaunch({
							// 						url: '/pages/index/index'
							// 					})
							// 				}
							// 			}
							// 		},
							// 		fail: (error) => {
							// 			store.token = ''
							// 			store.userInfo = {}
							// 		}
							// 	})
							// }, 5000);
						} else {
							store.token = ''
							store.userInfo = {}
						}
					}
				}
				reject(interceptors.response(config_, res))
			}
		}).catch((err) => {
			reject(interceptors.response(config_, err))
		})
	})

}
export {
	uniRequest
}