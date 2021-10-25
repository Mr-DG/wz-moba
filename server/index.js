const express = require('express')

const app = express()

// 全局设置密钥
app.set('secret', 'woshidashuaibi')

// 解决跨域
app.use(require('cors')())
// 接收post请求
app.use(express.json())
// 托管静态文件,让static路径下的文件，可以通过/uploads来访问
app.use('/uploads', express.static(__dirname + '/uploads'))
// 托管admin文件夹
app.use('/admin', express.static(__dirname + '/admin'))
// 托管web文件夹
app.use('/', express.static(__dirname + '/web'))
// 连接数据库
require('./plugins/db')(app)
// 模块化admin相关路由
require('./routes/admin')(app)
// 模块化web相关路由
require('./routes/web')(app)

app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
})