<template>
	<view class="search-box flex">
		<view class="search-select" @click="selectCity">
			{{ selectLabel }}
			<uni-icons type="down" size="16"></uni-icons>
		</view>
		<uni-search-bar class="search-input-box" placeholder="请输入关键字搜索" clearButton="auto" cancelButton="none"
			@confirm="search" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	let selectLabel = ref('深圳市')
	let selectCity = () => {}
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