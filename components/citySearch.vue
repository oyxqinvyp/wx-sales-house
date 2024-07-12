<template>
	<view class="search-box flex">
		<view class="search-select" @click="selectCity">
			{{ selectLabel }}
			<uni-icons type="down" size="16"></uni-icons>
		</view>
		<uni-search-bar class="search-input-box" placeholder="请输入关键字搜索" clearButton="auto" cancelButton="none"
			@confirm="search" />

		<uni-popup ref="popup" type="center" :animation="false">
			<view style="width: 100vw;height: 100vh;background-color: #fff;">
				<uni-indexed-list :options="list" @click="bindClick" />
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import citysList from '@/sdk/citys/citys.js'
	let selectLabel = ref('深圳市')
	let popup = ref()
	let list = ref(citysList)
	let selectCity = () => {
		popup.value.open()
	}
	let bindClick = (e) => {
		selectLabel.value = e.item.name
		popup.value.close()
	}
	let search = () => {}
</script>

<style lang="less" scoped>
	.search-box {
		align-items: center;
		padding-left: 10rpx;

		.search-select {
			flex-shrink: 0;
		}

		.search-input-box {
			width: 100%;
		}
	}
</style>