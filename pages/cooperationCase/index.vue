<template>
	<view class="cooperationCase-page">
		<view class="search-box">
			<uv-search bgColor="#fff" placeholder="请输入搜索内容" v-model="keyword" :showAction="false"></uv-search>
			<view class="cooperationCase-list">
				<view class="item-box" v-for="(item, index) in list" :key="index">
					<view class="item-1">
						<view class="item-2">
							<view class="item-img">
								<image
									src="https://img0.baidu.com/it/u=1799694557,1475747482&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1721149200&t=f4298e1ed92d6d0d72a4d005419f6882"
									mode="" style="width: 100%;height: 100%;"></image>
							</view>
							<view class="title-box flex justify-between">
								<text>标题</text>
								<uni-tag text="下载" type="primary" size="small" />
							</view>
							<view class="item-desc gray">深圳市xxxx房地产开发有限公司</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import {
	onReachBottom,
	onPullDownRefresh,
} from '@dcloudio/uni-app'
import { ref } from 'vue'
let keyword = ref('')
let list = ref([{}, {}, {}, {}, {}])

onPullDownRefresh(() => {
	setTimeout(function () {
		uni.stopPullDownRefresh();
	}, 500);
})
onReachBottom(() => {

})
</script>

<style scoped lang="less">
.cooperationCase-page {
	.search-box {
		padding: 6rpx;
		padding-top: 12rpx;
	}

	.cooperationCase-list {
		display: flex;
		flex-wrap: wrap;
		margin-top: 10rpx;

		.item-box {
			width: 50%;
			margin-bottom: 3rpx;

			.item-1 {
				padding: 1rpx;

				.item-2 {
					padding: 12rpx;
					border: 1px solid #eee;
					background-color: #fff;

					.item-img {
						width: 100%;
						height: 200rpx;
					}

					.item-desc {
						margin-top: 2rpx;
						font-size: 22rpx;
					}
				}

			}

		}
	}
}
</style>
