<template>
  <div class="card bg-white pb-3">
    <div class="d-flex ai-center mx-3 pt-3 mt-3" :class="{'border-bottom': !plain, 'pb-3': !plain}">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2"><strong>{{title}}</strong></div>
      <i class="iconfont icon-more" v-if="!plain"></i>
    </div>
    <div class="card-body pt-3 px-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    plain: { type: Boolean }
  },
  data () {
    return {
    }
  },
  components: {

  }
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.card {
  border-bottom: 1px solid $border-color;
}
</style>
