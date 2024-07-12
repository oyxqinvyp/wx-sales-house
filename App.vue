<script>
	export default {
		onLaunch: function() {
			console.log('初始化')
		},
		onShow: function() {
			console.log('显示')
		},
		onHide: function() {
			console.log('隐藏')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';

	// 公式样式
	.flex {
		display: flex;
	}

	// 设置整个项目的背景色
	.container-box {
		font-size: 28rpx;
		background-color: #fff;
	}

	page {
		background-color: #f5f5f5;
	}

	.title {
		font-size: 32rpx;
		color: #333;
	}
	.w-full {
		width: 100%;
	}
	.flex-shrink {
		flex-shrink: 0;
	}
	.gray {
		color: #a4a4a4;
		font-size: 24rpx;
	}
</style>