<template>
	<view class="container">
		<button @click="toDetail">跳转到新页面</button>
	</view>
</template>

<script setup>
	let toDetail = () => {
		uni.navigateTo({
			url: '/pages/houseList/index'
		})
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>