<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom text-blue">
      <div class="iconfont icon-back"></div>
      <strong class="flex-1 pl-2">
        {{model.title}}
      </strong>
      <div class="text-grey fs-xs">2019-06-28</div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data () {
    return {
      model: null
    }
  },
  methods: {
    async fetch () {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created () {
    this.fetch();
  }
}
</script>

<style lang="scss">
.page-article {
  .body {
    img {
      max-width: 100%;
      max-height: auto;
    }
    iframe {
      max-width: 100%;
      max-height: auto;
    }
  }
}
</style>
