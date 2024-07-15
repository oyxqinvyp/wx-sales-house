<template>
	<view class="mediaIntroduction-page">
		<view class="item-title">
			人群包
		</view>
		<view class="item-btn flex justify-between">
			<view class="btn-left">
				<view class="left-title">
					已选人群包
				</view>
				<view class="gray">
					共计: 70.1万
				</view>
			</view>
			<view class="btn-right">
				<uv-button type="primary" text="确定"></uv-button>
			</view>
		</view>
		<view class="item-list">
			<view v-for="(item, index) in list" :key="index" class="item-item">
				<view class="item-name flex items-center justify-between">
					<view class="flex">
						<uv-icon name="photo" size="20"></uv-icon>
						{{ item.name }}({{ item.num }})
					</view>
					<uv-icon name="close-circle-fill" size="16"></uv-icon>
				</view>
			</view>
		</view>
		<view id="mapWrapper" style="height: 500rpx;"></view>
		<view class="mt-12">
			<view class="item-title mt-12">
				媒体介绍
			</view>
			<view class="cooperationCase-list mt-12">
				<view class="item-box" v-for="(item, index) in list" :key="index">
					<view class="item-1">
						<view class="item-2">
							<view class="item-img">
								<image
									src="https://img0.baidu.com/it/u=1799694557,1475747482&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1721149200&t=f4298e1ed92d6d0d72a4d005419f6882"
									mode="" style="width: 100%;height: 100%;"></image>
							</view>
							<view class="title-box flex justify-between">
								<text>微信朋友圈</text>
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
import { ref, onMounted } from 'vue'
let list = ref([
	{
		name: '人群包1',
		num: 100000,
	},
	{
		name: '人群包2',
		num: 200000,
	},
	{
		name: '人群包3',
		num: 300000,
	},
	{
		name: '人群包4',
		num: 400000,
	},
	{
		name: '人群包5',
		num: 500000,
	},
	{
		name: '人群包6',
		num: 600000,
	},
	{
		name: '人群包7',
		num: 700000,
	}
])

// 初始化地图
function init() {
	let center = new TMap.LatLng(40.035004, 116.216400);//设置中心点坐标
	let map = new TMap.Map('mapWrapper', {
		center: center,
		zoom: 16,
		zoomControl: false
	});
	let path = [
		[
			[
				new TMap.LatLng(40.034675, 116.215627),
				new TMap.LatLng(40.034199, 116.215686),
				new TMap.LatLng(40.034277, 116.216620),
				new TMap.LatLng(40.034770, 116.216539),
				new TMap.LatLng(40.034770, 116.216539),
			]
		]
	];
	new TMap.MultiPolygon({
		id: 'polygon-layer', //图层id
		map: map, //显示多边形图层的底图
		styles: { //多边形的相关样式
			'polygon': new TMap.PolygonStyle({
				'color': 'rgba(63, 139, 249,0.5)', //面填充色
				'showBorder': true, //是否显示拔起面的边线
				'borderColor': '#3f8bf9' //边线颜色
			})
		},
		geometries: [
			{
				'id': 'polygon', //多边形图形数据的标志信息
				'styleId': 'polygon', //样式id
				'paths': path, //多边形的位置信息
				'properties': { //多边形的属性数据
					'title': 'polygon'
				}
			}
		]
	});
}

// 
onMounted(() => {
	init()
})
</script>

<style scoped lang="less">
.mediaIntroduction-page {
	padding: 10rpx;
	background: #fff;

	.item-btn {
		padding: 20rpx;
	}

	.item-name {
		padding: 10rpx 60rpx 10rpx 20rpx;
	}
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
</style>
