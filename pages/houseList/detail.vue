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
		<uv-sticky bgColor="#fff">
			<uv-tabs :list="list" @click="onClickItem"></uv-tabs>
			<view class="my-btns flex justify-between mt-12">
				<view style="width: 400rpx;">
					<uv-subsection style="width: 400rpx;" :list="subsectionList" mode="subsection" :current="subsectionCurrent"
						@change="change"></uv-subsection>
				</view>
				<uv-button size="normal" type="primary" :custom-style="{
					height: '60rpx'
				}">导出</uv-button>
			</view>
		</uv-sticky>
		<view class="box-con">
			<view class="charts-item item-1">
				<view class="item-title">
					客流趋势分析
				</view>
				<view class="item-chart">
					<qiun-data-charts type="line" canvasId='bb32ca8b-19c4-c930-5f3e-5dd8dbebb168' :opts="opts1"
						:chartData="chartData1" :onzoom="true" background="#fff" :canvas2d="true" />
				</view>
			</view>
			<view class="charts-item item-2">
				<view class="item-title">
					来源地分析
				</view>
				<view class="item-table">
					<view class="item-head">
						<view class="item-tr">
							<view class="item-th">
								来源小区
							</view>
							<view class="item-th">
								客户数量
							</view>
						</view>
					</view>
					<view class="item-body">
						<view class="item-tr" v-for="(it, index) in tableData2" :key="index">
							<view class="item-td">
								{{ it.name }}
							</view>
							<view class="item-td">
								{{ it.num }}
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="charts-item item-3">
				<view class="item-title">
					楼盘竞品分析
				</view>
				<view class="item-table">
					<view class="item-head">
						<view class="item-tr">
							<view class="item-th">
								楼盘名称
							</view>
							<view class="item-th">
								到访过的客户数量
							</view>
						</view>
					</view>
					<view class="item-body">
						<view class="item-tr" v-for="(it, index) in tableData2" :key="index">
							<view class="item-td">
								{{ it.name }}
							</view>
							<view class="item-td">
								{{ it.num }}
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="charts-item item-4">
				<view class="item-title">
					客户归属地
				</view>
				<view class="item-table">
					<view class="item-head">
						<view class="item-tr">
							<view class="item-th">
								城市
							</view>
							<view class="item-th">
								区域
							</view>
							<view class="item-th">
								街道
							</view>
							<view class="item-th">
								客户数量
							</view>
						</view>
					</view>
					<view class="item-body">
						<view class="item-tr" v-for="(it, index) in tableData2" :key="index">
							<view class="item-td">
								{{ it.name }}
							</view>
							<view class="item-td">
								{{ it.num }}
							</view>
							<view class="item-td">
								{{ it.num }}
							</view>
							<view class="item-td">
								{{ it.num }}
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="charts-item item-5">
				<view class="item-title">
					客户基础画像
				</view>
				<view class="item-bar">
					<view class="bar-box">
						<view class="box-title">
							<view class="title-str">-性别</view>
							<view class="title-tag title-tag-1">男</view>
							<view class="title-tag title-tag-2">女</view>
						</view>
						<view class="bar-con flex justify-between">
							<view class="con-tag con-tag-1" :style="`width: ${60}%;`">60%</view>
							<view class="con-tag con-tag-2" :style="`width: ${40}%;`">40%</view>
						</view>
					</view>
					<view class="bar-box">
						<view class="box-title">
							<view class="title-str">-婚姻</view>
							<view class="title-tag title-tag-1">已婚</view>
							<view class="title-tag title-tag-2">未婚</view>
						</view>
						<view class="bar-con flex justify-between">
							<view class="con-tag con-tag-1" :style="`width: ${60}%;`">60%</view>
							<view class="con-tag con-tag-2" :style="`width: ${40}%;`">40%</view>
						</view>
					</view>
					<view class="bar-box">
						<view class="box-title">
							<view class="title-str">-有孩</view>
							<view class="title-tag title-tag-1">无</view>
							<view class="title-tag title-tag-2">有</view>
						</view>
						<view class="bar-con flex justify-between">
							<view class="con-tag con-tag-1" :style="`width: ${60}%;`">60%</view>
							<view class="con-tag con-tag-2" :style="`width: ${40}%;`">40%</view>
						</view>
					</view>
				</view>
			</view>
			<view class="charts-item item-6">
				<view class="item-title">
					报告数据
				</view>
				<view class="item-report">
					<view class="item-box flex justify-between" v-for="(it, index) in barList4" :key="index">
						<view class="item-box-title">{{ it.name }}</view>
						<view class="item-box-value">{{ it.value }}</view>
					</view>
				</view>
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

	let subsectionCurrent = ref(1)
	let change = (e) => {
		subsectionCurrent.value = e
		console.log(e)
	}
	let subsectionList = ['7天', '30天', '180天']

	// 图表1
	let chartData1 = ref({
		categories: [
			"1月", "2月", "3月", "4月", "5月", "6月"
		],
		series: [{
			name: "客流",
			data: [35, 8, 25, 37, 4, 20, 35, 8, 25, 37, 4, 20]
		}]
	})
	let opts1 = {
		enableScroll: false,
		legend: {
			show: false,
		},
	}

	// 表格2
	let tableData2 = ref([{
			name: '汇海小区',
			num: '123'
		},
		{
			name: '汇海小区',
			num: '123'
		},
		{
			name: '汇海小区',
			num: '123'
		},
		{
			name: '汇海小区',
			num: '123'
		},
		{
			name: '汇海小区',
			num: '123'
		},
		{
			name: '汇海小区',
			num: '123'
		},
		{
			name: '汇海小区',
			num: '123'
		},
	])

	// 表格3
	let tableData3 = ref([{
			name: '汇海小区',
			num: '123'
		},
		{
			name: '汇海小区',
			num: '123'
		},
		{
			name: '汇海小区',
			num: '123'
		},
		{
			name: '汇海小区',
			num: '123'
		},
		{
			name: '汇海小区',
			num: '123'
		},
		{
			name: '汇海小区',
			num: '123'
		},
		{
			name: '汇海小区',
			num: '123'
		},
	])

	// 表格4
	let barList4 = ref([{
			name: '报告数据1',
			value: '123'
		},
		{
			name: '报告数据2',
			value: '123'
		},
		{
			name: '报告数据3',
			value: '123'
		},
		{
			name: '报告数据4',
			value: '123'
		},
		{
			name: '报告数据5',
			value: '123'
		},
		{
			name: '报告数据6',
			value: '123'
		},
		{
			name: '报告数据7',
			value: '123'
		},
	])
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

		.flex.justify-between.mt-12 {
			padding: 0 16rpx;
		}

		.box-con {

			.charts-item {
				background-color: #fff;
				padding-top: 16rpx;
			}

			.item-bar {
				padding: 20rpx;

				.bar-con {
					margin-top: 20rpx;
					margin-bottom: 20rpx;
					border-radius: 10rpx;
					overflow: hidden;


					.con-tag {
						text-align: center;
						color: #fff;
						padding: 10rpx;
					}

					.con-tag-1 {
						background: #1890ff;
					}

					.con-tag-2 {
						background: #91cb74;
					}
				}

				.box-title {
					display: flex;
					align-items: center;

					// justify-content: space-between;
					.title-tag {
						width: 200rpx;
						text-align: center;

						&::after {
							content: '';
							width: 30rpx;
							height: 30rpx;
							display: inline-block;
							margin-left: 6rpx;
							vertical-align: text-bottom;
						}

						&.title-tag-1::after {
							background: #1890ff;
						}

						&.title-tag-2::after {
							background: #91cb74;
						}
					}
				}
			}

			.item-report {
				padding: 20rpx;

				.item-box {
					margin-bottom: 20rpx;
					padding: 20rpx 10rpx;
					background: #f1f2f4;
					border-radius: 10rpx;
				}
			}
		}
	}
</style>