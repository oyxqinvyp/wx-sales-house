<template>
	<view class="container-box">
		<view class="search-box flex">
			<view class="search-select" @click="selectCity">
				{{ selectLabel }}
				<uni-icons type="down" size="16"></uni-icons>
			</view>
			<uni-search-bar class="search-input-box" placeholder="请输入关键字搜索" clearButton="auto" cancelButton="none"
				@confirm="search" />
		</view>
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
			<swiper class="swiper-box">
				<swiper-item v-for="(item ,index) in info" :key="index">
					<view class="swiper-item">
						{{item.content}}
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<view class="tabs-box">
			<view class="tab-box" v-for="(item, index) in tabList" :key="index" @click="toPath(item)">
				{{ item.name }}
			</view>
		</view>
	</view>
</template>

<script setup>
	import QQMapWX from '@/sdk/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.js'

	import {
		ref,
		onMounted,
	} from 'vue'


	let selectLabel = ref('深圳市')
	let selectCity = () => {

	}
	let search = () => {
		console.log('搜索')
	}

	// 获取定位
	let getLocation = () => {
		uni.showLoading({
			title: '获取信息中'
		});
		let qqmapsdk = new QQMapWX({
			key: 'DCDBZ-GWO3V-JT2PG-5XSQD-UTZZF-DYBND'
		})
		uni.getLocation({
			type: 'wgs84',
			geocode: true,
			success: function(res) {
				qqmapsdk.reverseGeocoder({
					location: {
						latitude: res.latitude,
						longitude: res.longitude
					},
					success({
						result
					}) {
						selectLabel.value = result.ad_info.city
						uni.hideLoading();
					},
					fail(error) {
						uni.hideLoading();
					},
				})
			},
			fail(error) {
				console.log(error)
				uni.hideLoading();
			}
		})
	}

	// 轮播
	let info = [{
		content: '内容 A'
	}, {
		content: '内容 B'
	}, {
		content: '内容 C'
	}]
	let current = 0
	let mode = 'dot'

	// tabs
	let tabList = [{
			name: '售楼处列表',
			path: '/pages/houseList/index'
		},
		{
			name: '投放展示',
			path: '/pages/display/index'
		},
		{
			name: '合作案例',
			path: '/pages/cooperationCase/index'
		},
		{
			name: '媒体介绍',
			path: '/pages/mediaIntroduction/index'
		}
	]
	let toPath = (item) => {
		uni.navigateTo({
			url: item.path
		})
	}
	onMounted(() => {
		getLocation()
	})
</script>

<style lang="less">
	.container-box {
		padding: 0 10rpx;

		.search-box {
			background-color: #fff;
			align-items: center;

			.search-select {
				flex-shrink: 0;
			}

			.search-input-box {
				width: 100%;
			}
		}
	}
</style>