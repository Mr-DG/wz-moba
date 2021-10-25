const mongoose = require('mongoose')

const schema = mongoose.Schema({
  username: { type: String },
  // set函数是将获取到的值做处理之后在保存进数据库
  // 散列第三方库，npm i bcrypt
  password: {
    type: String,
    // select表示是否可以被查出来
    select: false,
    set (val) {
      // hashSync第一个参数表示，需要散列的值，第二个参数是散列的指数，越大越耗时
      return require('bcrypt').hashSync(val, 10)
    }
  }
})

module.exports = mongoose.model('AdminUser', schema)