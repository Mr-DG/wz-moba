<template>
  <m-card :icon="icon" :title="title">
    <div class="nav jc-between px-3">
      <div class="nav-item" :class="{active: active === index}" v-for="(category,index) in categories" :key="index"
        @click="$refs.list.swiper.slideTo(index)">
        <div class="nav-link">{{category.name}}</div>
      </div>
    </div>
    <swiper ref="list" :options="swiperOption" @slide-change="() => active = $refs.list.swiper.realIndex">
      <swiper-slide class="p-3" v-for="(category, index) in categories" :key="index">
        <slot name="items" :category="category">
        </slot>
      </swiper-slide>
    </swiper>
  </m-card>
</template>

<script>
export default {
  name: '',
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    categories: { type: Array, required: true },
  },
  data () {
    return {
      active: 0,
      swiperOption: {
        autoHeight: true
      }
    }
  }
}
</script>

<style scoped>
</style>