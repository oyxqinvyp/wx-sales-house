import {
	defineStore
} from 'pinia'
import {
	reactive
} from 'vue'

export const useStore = defineStore('xh-store', {
	// pinia state类似vue的data,如果不使用()，就必须使用return返回对象
	state: () => ({
		// token
		token: '',
		openid: '',
		// 用户信息
		userInfo: {
			realName: '',
		}
	}),

	getters: {
		//  store 的 state 的计算值。推荐使用箭头函数，并且它将接收 state 作为第一个参数：
		// doubleCount: (state) => state.count * 2,
	},
	actions: {},
	unistorage: true // 开启后对 state 的数据读写都将持久化
})