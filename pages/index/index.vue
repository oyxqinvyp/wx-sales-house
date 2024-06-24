<template>
  <view class="container-box">
    <view class="box-top">
      <view class="search-box flex">
        <view class="search-select" @click="selectCity">
          {{ selectLabel }}
          <uni-icons type="down" size="16"></uni-icons>
        </view>
        <uni-search-bar
          class="search-input-box"
          placeholder="请输入关键字搜索"
          clearButton="auto"
          cancelButton="none"
          @confirm="search"
        />
      </view>
      <uni-swiper-dot
        :info="info"
        :current="current"
        field="content"
        :mode="mode"
      >
        <swiper class="swiper-box">
          <swiper-item v-for="(item, index) in info" :key="index">
            <view class="swiper-item">
              {{ item.content }}
            </view>
          </swiper-item>
        </swiper>
      </uni-swiper-dot>
      <view class="tabs-box">
        <view
          class="tab-box"
          v-for="(item, index) in tabList"
          :key="index"
          @click="toPath(item)"
        >
          <image :src="item.img" mode="" class="tab-box-img"></image>
          <view class="">
            {{ item.name }}
          </view>
        </view>
      </view>
    </view>
    <view class="box-bottom">
      <view class="bottom-title">人气售楼处推荐</view>
      <view class="bottom-list">
        <view
          class="list-item flex"
          v-for="(item, index) in recommendList"
          :key="index"
        >
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
  </view>
</template>

<script setup>
import itemImg1 from "@/static/images/item-1.png";
import itemImg2 from "@/static/images/item-2.png";
import itemImg3 from "@/static/images/item-3.png";
import itemImg4 from "@/static/images/item-4.png";
import QQMapWX from "@/sdk/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.js";

import { ref, onMounted } from "vue";

let selectLabel = ref("深圳市");
let selectCity = () => {};
let search = () => {
  console.log("搜索");
};

// 获取定位
let getLocation = () => {
  uni.showLoading({
    title: "获取信息中",
  });
  let qqmapsdk = new QQMapWX({
    key: "DCDBZ-GWO3V-JT2PG-5XSQD-UTZZF-DYBND",
  });
  uni.getLocation({
    type: "wgs84",
    geocode: true,
    success: function (res) {
      qqmapsdk.reverseGeocoder({
        location: {
          latitude: res.latitude,
          longitude: res.longitude,
        },
        success({ result }) {
          selectLabel.value = result.ad_info.city;
          uni.hideLoading();
        },
        fail(error) {
          uni.hideLoading();
        },
      });
    },
    fail(error) {
      console.log(error);
      uni.hideLoading();
    },
  });
};

// 轮播
let info = [
  {
    content: "内容 A",
  },
  {
    content: "内容 B",
  },
  {
    content: "内容 C",
  },
];
let current = 0;
let mode = "dot";

// tabs
let tabList = [
  {
    name: "售楼处列表",
    path: "/pages/houseList/index",
    img: itemImg1,
  },
  {
    name: "投放展示",
    path: "/pages/display/index",
    img: itemImg2,
  },
  {
    name: "合作案例",
    path: "/pages/cooperationCase/index",
    img: itemImg3,
  },
  {
    name: "媒体介绍",
    path: "/pages/mediaIntroduction/index",
    img: itemImg4,
  },
];
let toPath = (item) => {
  uni.navigateTo({
    url: item.path,
  });
};

// 列表
let recommendList = ref([
  {
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
]);
onMounted(() => {
  getLocation();
});
</script>

<style lang="less">
.container-box {
  .box-top {
    padding: 20rpx;
    background-color: #fff;

    .search-box {
      align-items: center;

      .search-select {
        flex-shrink: 0;
      }

      .search-input-box {
        width: 100%;
      }
    }

    .tabs-box {
      display: flex;

      .tab-box {
        width: 25%;
        text-align: center;

        .tab-box-img {
          width: 80rpx;
          height: 80rpx;
        }
      }
    }
  }

  .box-bottom {
    background-color: #fff;
    margin-top: 20rpx;
    padding: 20rpx;
    .bottom-title {
      margin-bottom: 12rpx;
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
  }
}
</style>
