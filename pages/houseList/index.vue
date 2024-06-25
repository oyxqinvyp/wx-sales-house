<template>
	<view class="container-box">
		<citySearchInput></citySearchInput>
		<view class="bottom-list">
			<view @click="toDetailPath(item)" class="list-item flex" v-for="(item, index) in recommendList" :key="index">
				<view class="list-item-img"></view>
				<view class="list-item-box">
					<view class="item-title flex">
						<text>{{ item.title }}</text>
						<uni-tag text="在售" type="primary" size="small" />
					</view>
					<view class="item-id">{{ item.id }}</view>
					<view class="item-tips">{{ item.tips }}</view>
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
	import {
		ref
	} from 'vue'
	import citySearchInput from '@/components/citySearch.vue'

	// query
	let params = ref({
		page: 1,
		size: 20
	})
	onPullDownRefresh(() => {
		recommendList.value = [{
				title: "售楼处名称",
				id: "123456",
				tips: "这里是售楼处介绍",
			},
			{
				title: "售楼处名称",
				id: "123456",
				tips: "这里是售楼处介绍",
			},
			{
				title: "售楼处名称",
				id: "123456",
				tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
			},
			{
				title: "售楼处名称",
				id: "123456",
				tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
			},
			{
				title: "售楼处名称",
				id: "123456",
				tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
			},
			{
				title: "售楼处名称",
				id: "123456",
				tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
			},
			{
				title: "售楼处名称",
				id: "123456",
				tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
			},
			{
				title: "售楼处名称",
				id: "123456",
				tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
			},
			{
				title: "售楼处名称",
				id: "123456",
				tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
			},
		]
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	})
	onReachBottom(() => {
		recommendList.value = recommendList.value.concat([{
				title: "售楼处名称",
				id: "123456",
				tips: "这里是售楼处介绍",
			},
			{
				title: "售楼处名称",
				id: "123456",
				tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
			},
			{
				title: "售楼处名称",
				id: "123456",
				tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
			},
			{
				title: "售楼处名称",
				id: "123456",
				tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
			},
			{
				title: "售楼处名称",
				id: "123456",
				tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
			},
			{
				title: "售楼处名称",
				id: "123456",
				tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
			},
		])
	})
	// 列表
	let toDetailPath = (item) => {
		uni.navigateTo({
			url: "/pages/houseList/detail?id=" + item.id,
		})
	}
	let recommendList = ref([{
			title: "售楼处名称",
			id: "123456",
			tips: "这里是售楼处介绍",
		},
		{
			title: "售楼处名称",
			id: "123456",
			tips: "这里是售楼处介绍",
		},
		{
			title: "售楼处名称",
			id: "123456",
			tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
		},
		{
			title: "售楼处名称",
			id: "123456",
			tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
		},
		{
			title: "售楼处名称",
			id: "123456",
			tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
		},
		{
			title: "售楼处名称",
			id: "123456",
			tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
		},
		{
			title: "售楼处名称",
			id: "123456",
			tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
		},
		{
			title: "售楼处名称",
			id: "123456",
			tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
		},
		{
			title: "售楼处名称",
			id: "123456",
			tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
		},
		{
			title: "售楼处名称",
			id: "123456",
			tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
		},
		{
			title: "售楼处名称",
			id: "123456",
			tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
		},
		{
			title: "售楼处名称",
			id: "123456",
			tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
		},
		{
			title: "售楼处名称",
			id: "123456",
			tips: "这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍这里是售楼处介绍",
		},
	]);
</script>

<style lang="less" scoped>
	.container-box {
		padding: 0 20rpx 20rpx 20rpx;
	}

	.list-item {
		height: 128rpx;
		margin-bottom: 16rpx;

		.list-item-img {
			flex-shrink: 0;
			width: 128rpx;
			height: 128rpx;
			background-color: #999;
		}

		.list-item-box {
			width: 100%;
			margin-left: 16rpx;

			.item-title {
				align-items: center;
				justify-content: space-between;
				font-size: 36rpx;
				color: #333;
				margin-bottom: 8rpx;
			}

			.item-id {
				font-size: 24rpx;
				color: #999;
				margin-bottom: 8rpx;
			}

			.item-tips {
				font-size: 24rpx;
				color: #999;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}
		}
	}
</style>