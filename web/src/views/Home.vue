<template>
  <div style="overflow: hidden">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide><img class="w-100" src="../assets/images/15de2275152058fed8b8973f6662d475.jpeg"></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/images/15de2275152058fed8b8973f6662d475.jpeg"></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/images/15de2275152058fed8b8973f6662d475.jpeg"></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/images/15de2275152058fed8b8973f6662d475.jpeg"></swiper-slide>
      <div class="swiper-pagination pagination-home text-right pr-2" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->

    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap ">
        <div class="nav-item mb-3">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
        <div class="nav-item mb-3" v-for="n in 9" :key="n">
          <i class="sprite sprite-story"></i>
          <div class="py-2">故事站</div>
        </div>
      </div>
      <!-- 收起 -->
      <div class="bg-light py-2 fs-sm">
        <div class="sprite sprite-arrow mr-1"></div>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->

    <m-list-card icon="cc-menu-circle" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link tag="div" :to="`/articles/${news._id}`" class="py-2 fs-lg d-flex"
          v-for="(news, index) in category.newsList" :key="index">
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2"> | </span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-grey-1 fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
          <router-link tag="div" :to="`/heroes/${hero._id}`" class="p-2 text-center" style="width: 20%"
            v-for="(hero, index) in category.heroList" :key="index">
            <img :src="hero.avatar" class="w-100">
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>
    <!-- <m-card icon="card-hero" title="精彩视频"></m-card>
    <m-card icon="card-hero" title="图文攻略"></m-card>

    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p> -->

  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters: {
    date (val) {
      return dayjs(val).format('MM/DD')
    }
  },
  data () {
    return {
      swiperOptions: {
        // 自动轮播
        autoplay: { delay: 2500 },
        pagination: {
          el: '.pagination-home'
        },
        // Some Swiper option/callback...
      },
      newsCats: [],
      heroCats: []
    }
  },
  methods: {
    async fetchNewsCats () {
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    },

    async fetchHeroCats () {
      const res = await this.$http.get('heroes/list')
      this.heroCats = res.data
    }
  },
  created () {
    this.fetchNewsCats()
    this.fetchHeroCats()
  }
}
</script>

<style lang="scss">
@import "../assets/scss/variables";

.pagination-home {
  .swiper-pagination-bullet {
    margin: 0 0.307692rem;
    opacity: 1;
    border-radius: 0.153846rem;
    background-color: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background-color: map-get($colors, "info");
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
