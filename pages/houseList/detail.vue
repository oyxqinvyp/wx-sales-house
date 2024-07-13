<template>
	<view class="house-box">
		<view class="box-top">
			<view class="box-title">
				<view class="title-img">
					<image src="https://img1.baidu.com/it/u=465289696,3068910287&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067"
						mode="" style="width: 100%;height: 100%;"></image>
				</view>
				<view class="title-sub">
					<view class="title">
						万科大都会
					</view>
					<view class="gray">
						场景ID: 9421124
					</view>
				</view>
				<view class="title-tag">
					<uni-tag text="在售" type="primary" size="small" />
				</view>
			</view>
			<view class="title-tip">
				开盘时间: 2024年8月12
			</view>
			<view class="title-tip">
				开盘时间: 2024年8月12
			</view>
			<view class="title-tip">
				开盘时间: 2024年8月12
			</view>
		</view>
		<view class="box-con">
			<view class="tabs-box">
				<uv-sticky bgColor="#fff">
					<uv-tabs :list="list" @click="onClickItem"></uv-tabs>
					<uv-button text="月落" type="primary"></uv-button>
				</uv-sticky>
			</view>
			<view class="item-1">
				
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'

	let current = ref(1)
	let list = [{
		name: '客流趋势分析'
	}, {
		name: '来源地分析'
	}, {
		name: '楼盘竞品分析'
	}, {
		name: '客户归属地'
	}, {
		name: '客户基础画像'
	}, {
		name: '报告数据'
	}]

	let open = () => {

	}
	let onClickItem = (e) => {
		console.log(e)
	}

	onLoad((option) => {
		console.log(option)
	})
</script>

<style lang="less" scoped>
	.house-box {
		.box-top {
			padding: 28rpx;
			background-color: #fff;

			.title-tip {
				margin-top: 16rpx;
				font-size: 26rpx;
			}

			.box-title {
				display: flex;
				align-items: center;

				.title-img {
					flex-shrink: 0;
					width: 100rpx;
					height: 100rpx;
					background-color: #999;
					margin-right: 20rpx;
				}

				.title-sub {
					width: 100%;

					.title {
						margin-bottom: 20rpx;
					}
				}

				.title-tag {
					flex-shrink: 0;
				}
			}
		}

		.box-con {
			margin-top: 16rpx;
			padding: 0 10rpx;
		}
	}
</style>