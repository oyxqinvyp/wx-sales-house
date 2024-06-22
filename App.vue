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
	
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
