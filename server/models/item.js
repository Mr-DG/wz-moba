const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: { type: String },
  // 将图片保存到一个地方，然后保存那个地方的地址到数据库就可以了
  icon: { type: String }
})

module.exports = mongoose.model('Item', schema)