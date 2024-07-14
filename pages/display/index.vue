<template>
	<view class="display-page">
		<uv-sticky bgColor="#fff">
			<uv-tabs :list="list" @click="onClickItem"></uv-tabs>
		</uv-sticky>
		<view class="item-1" style="">
			<video style="width: 100%;" src="https://cdn.modao.cc/Default_video.mp4"></video>
		</view>
		<view class="item-2 mt-12">
			<view class="item-title">
				今日曝光
			</view>
			<view class="item-btn flex justify-between mt-12 p-12">
				<uv-button type="primary" style="height: 58rpx;">导出</uv-button>
				<uv-subsection style="width: 400rpx;" :list="subsectionList" mode="subsection" :current="subsectionCurrent"
					@change="change"></uv-subsection>
			</view>
			<view class="item-chart">
				<qiun-data-charts type="column" canvasId='bb32ca8b-19c4-c930-5f3e-5dd8dbebb168' :opts="opts1"
					:chartData="chartData1" :onzoom="true" background="#fff" :canvas2d="true" />
			</view>
		</view>
	</view>
</template>

<script setup>
import {
	onLoad,
	onPageScroll
} from '@dcloudio/uni-app'
import { ref } from 'vue'

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
	series: [
		{
			name: "爆光量",
			textColor: "#FFFFFF",
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
</script>

<style lang="less" scoped>
.display-page {
	// padding: 8rpx;
	background-color: #fff;
}
</style>
