<template>
	<view class="display-page">
		<uv-sticky bgColor="#fff">
			<uv-tabs :list="list" @click="onTabsItem"></uv-tabs>
		</uv-sticky>
		<view class="item-1" style="">
			<video style="width: 100%;" src="https://cdn.modao.cc/Default_video.mp4"></video>
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
				<view class="gray">
					<view>
						到访2022/07/03
					</view>
					<view>
						{{ 172 }}
					</view>
					<view>
						自然到访：
						{{ 102 }}
					</view>
					<view>
						广告到访：
						{{ 172 }}
					</view>
				</view>
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

		<view class="item-4 mt-12">
			<view class="item-title">
				区域客流
			</view>
			<view class="item-table mt-12">
				<view class="item-head">
					<view class="item-tr">
						<view class="item-th" style="width: 25%;">
							姓名
						</view>
						<view class="item-th" style="width: 25%;">
							电话
						</view>
						<view class="item-th">
							留言
						</view>
					</view>
				</view>
				<view class="item-body">
					<view class="item-tr" v-for="(it, index) in tableData3" :key="index">
						<view class="item-td" style="width: 25%;">
							{{ it.name }}
						</view>
						<view class="item-td" style="width: 25%;">
							{{ it.num }}
						</view>
						<view class="item-td">
							{{ it.num }}
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="item-5 mt-12">
			<view class="item-title">
				投放管理
			</view>
			<view class="item-card">
				<view class="card-box">
					<view class="card-title">今日爆光</view>
					<view class="item-chart mt-12">
						<qiun-data-charts type="column" canvasId='bb32ca8b-19c4-c930-5f3e-asdf1234-5dd8dbebb1' :opts="opts1"
							:chartData="chartData4" :onzoom="true" background="#fff" :canvas2d="true" />
					</view>
				</view>
			</view>
			<view class="item-card">
				<view class="card-box">
					<view class="card-title">
						已选人群包
						<text class="gray">(共计 70.1万)</text>
					</view>
					<view class="item-type mt-12 flex justify-between">
						<view class="item-type-left" style="width: 50%;">
							<view class="gray" v-for="(it, index) in type1" :key="index" >
								{{ it }}
							</view>
						</view>
						<view class="item-type-right" style="width: 50%;">
							<view class="gray" v-for="(it, index) in type2" :key="index" >
								{{ it }}
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="item-card">
				<view class="card-box">
					<view class="card-title">
						获客管理
					</view>
					<view class="item-type mt-12 flex justify-between">
						<view class="item-type-left" style="width: 50%;">
							<view class="num">
								266
							</view>
						</view>
						<view class="item-type-right" style="width: 50%;">
							<view class="gray">
								昨日 246
							</view>
							<view class="gray">
								今日 20
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="item-6 mt-12">
			<view class="item-title">
				HOME
			</view>
			<view class="item-card">
				<view class="card-box">
					<view class="card-title">今日到访</view>
					<view class="item-chart mt-12">
						<qiun-data-charts type="line" canvasId='bb32ca8b-19c4-c930-5f3e-asdf121134-5dd8dbebb1' :opts="opts2"
							:chartData="chartData6" :onzoom="true" background="#fff" :canvas2d="true" />
					</view>
				</view>
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

// 表格3
let tableData3 = ref([
	{
		name: '小区1',
		num: 100
	},
	{
		name: '小区2',
		num: 200
	},
	{
		name: '小区3',
		num: 300
	},
	{
		name: '小区4',
		num: 400
	},
	{
		name: '小区5',
		num: 500
	},
	{
		name: '小区6',
		num: 600
	},
	{
		name: '小区7',
		num: 700
	},
	{
		name: '小区8',
		num: 800
	},
	{
		name: '小区9',
		num: 900
	}
]
)

// 图表4
let chartData4 = ref({
	categories: [
		"08:00", "09:00", "10:00", "11:00", "12:00", "13:00"
	],
	series: [
		{
			name: "曝光",
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
		}
	]
})
let type1 = ref(['售楼1', '售楼2', '售楼3'])
let type2 = ref(['售楼1', '售楼2', '售楼3'])

// 图表6
let opts2 = {
	enableScroll: false,
	color: ["#8e5cef", "#c3aef6", "#ded3f7", "#ebe7fb"],
	extra: {
		column: {
			width: 30,
			activeBgColor: "#000000",
			activeBgOpacity: 0.08,
			labelPosition: "center"
		}
	}
}
let chartData6 = ref({
	categories: [
		"08:00", "09:00", "10:00", "11:00", "12:00", "13:00"
	],
	series: [
		{
			name: "曝光",
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
	]
})
</script>

<style lang="less" scoped>
.display-page {
	// padding: 8rpx;
	background-color: #fff;
}

.item-card {
	padding: 20rpx;

	.card-box {
		padding: 20rpx;
		border: 1px solid #e5e5e5;
		border-radius: 10rpx;
	}

	.item-type {}
}
</style>