<template>
	<view class="display-page">
		<uv-sticky bgColor="#fff">
			<uv-tabs :list="list" @click="onTabsItem"></uv-tabs>
		</uv-sticky>
		<view class="item-1" style="">
			<video style="width: 100%;" autoplay src="https://cdn.modao.cc/Default_video.mp4"></video>
		</view>
		<view class="item-2 mt-12">
			<view class="item-title">
				今日曝光
			</view>
			<view class="item-btn flex justify-between mt-12 p-12">
				<uv-button type="primary" :custom-style="{
					height: '60rpx'
				}" @click="onClickItem">
					{{ pickerValue }}
					<uv-icon name="arrow-down" size="30rpx" color="#fff" class="ml-12"></uv-icon>
				</uv-button>
				<view style="width: 400rpx;">
					<uv-subsection :list="subsectionList" mode="subsection" :current="subsectionCurrent"
						@change="change"></uv-subsection>
				</view>
			</view>
			<view class="item-chart">
				<qiun-data-charts type="column" canvasId='bb32ca8b-19c4-c930-5f3e-5dd8dbebb168' :opts="opts1"
					:chartData="chartData1" :onzoom="true" background="#fff" :canvas2d="true" />
			</view>
		</view>

		<view class="item-3 mt-12">
			<view class="item-title">
				今日到访
			</view>
			<view class="item-btn flex justify-between mt-12 p-12">
				<uv-button type="primary" :custom-style="{
					height: '60rpx'
				}" @click="onClickItem">
					{{ pickerValue }}
					<uv-icon name="arrow-down" size="30rpx" color="#fff" class="ml-12"></uv-icon>
				</uv-button>
				<view style="width: 400rpx;">
					<uv-subsection :list="subsectionList" mode="subsection" :current="subsectionCurrent"
						@change="change"></uv-subsection>
				</view>
			</view>
			<view class="item-chart">
				<qiun-data-charts type="column" canvasId='bb32ca8b-19c4-c930-5f3e-asdf1234-5dd8dbebb168' :opts="opts1"
					:chartData="chartData2" :onzoom="true" background="#fff" :canvas2d="true" />
			</view>
		</view>

		<!-- 类型选择 -->
		<uv-picker ref="picker" :columns="columns" @confirm="confirm"></uv-picker>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onPageScroll
	} from '@dcloudio/uni-app'
	import {
		ref
	} from 'vue'

	// 公共
	let onClickItem = () => {
		picker.value.open()
	}
	let picker = ref(null)
	let pickerValue = ref('抖音')
	let confirm = (e) => {
		console.log(e)
		pickerValue.value = e.value[0]
	}
	let columns = [
		[
			'抖音',
			'快手',
			'今日头条',
			'百度',
			'微博',
		]
	]

	let onTabsItem = (e) => {
		console.log(e)
	}
	let list = [{
		name: '今日曝光'
	}, {
		name: '今日到访'
	}, {
		name: '区域客流'
	}, {
		name: '获客管理'
	}, {
		name: '投放管理'
	}, {
		name: 'HOME'
	}]



	// 图表1
	let change = (e) => {
		subsectionCurrent.value = e
	}
	let subsectionCurrent = ref(1)
	let subsectionList = ['7天', '30天', '180天']
	let opts1 = {
		enableScroll: false,
		color: ["#8e5cef", "#c3aef6", "#ded3f7", "#ebe7fb"],
		extra: {
			column: {
				type: "stack",
				width: 30,
				activeBgColor: "#000000",
				activeBgOpacity: 0.08,
				labelPosition: "center"
			}
		}
	}
	let chartData1 = ref({
		categories: [
			"08:00", "09:00", "10:00", "11:00", "12:00", "13:00"
		],
		series: [{
				name: "爆光量",
				data: [35, 8, 25, 37, 4, 20, 35, 8, 25, 37, 4, 20]
			},
			{
				name: "点击",
				data: [35, 8, 25, 37, 4, 20, 35, 8, 25, 37, 4, 20]
			},
			{
				name: "获客",
				data: [35, 8, 25, 37, 4, 20, 35, 8, 25, 37, 4, 20]
			},
			{
				name: "到访",
				data: [35, 8, 25, 37, 4, 20, 35, 8, 25, 37, 4, 20]
			},
		]
	})

	// 图表2
	let chartDataDetail = ref({
		time: '2022/07/03',
		type: '抖音',
		pv: 1000,
		uv: 100,
	})
	let chartData2 = ref({
		categories: [
			"08:00", "09:00", "10:00", "11:00", "12:00", "13:00"
		],
		series: [{
				name: "自然到访",
				data: [35, 8, 25, 37, 4, 20, 35, 8, 25, 37, 4, 20]
			},
			{
				name: "广告到访",
				data: [35, 8, 25, 37, 4, 20, 35, 8, 25, 37, 4, 20]
			}
		]
	})
</script>

<style lang="less" scoped>
	.display-page {
		// padding: 8rpx;
		background-color: #fff;
	}
</style>