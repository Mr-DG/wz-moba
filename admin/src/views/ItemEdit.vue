<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}物品</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <!-- action是提交的接口地址 -->
        <!-- $http.defaults表示默认参数 -->
        <!-- on-success表示成功之后做什么,将服务端返回的值复制到model.icon -->
        <el-upload class="avatar-uploader" :action="uploadUrl" :headers="getAuthHeaders()" :show-file-list="false"
          :on-success="afterUpload">
          <!-- 这里的:src就是要保存的图片地址 -->
          <img v-if="model.icon" :src="model.icon" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  name: 'ItemEdit',
  data () {
    return {
      model: {}
    }
  },
  methods: {
    // 默认接收服务端返回的信息
    afterUpload (res) {
      this.$set(this.model, 'icon', res.url)
      // 这样页面没有显示上传的图片，可能是响应式的问题
      // this.model.icon = res.url
    },
    async save () {
      let res
      if (this.id) {
        res = await this.$http.put(`rest/items/${this.id}`, this.model)
      } else {
        res = await this.$http.post('rest/items/', this.model)
      }
      this.$router.push('/items/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/items/${this.id}`)
      this.model = res.data
    }
  },
  created () {
    this.id && this.fetch()
  }
}
</script>
