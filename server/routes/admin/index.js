module.exports = app => {
  const express = require('express')
  // jwt和AdminUser在所有路由里都用到所以提前
  const jwt = require('jsonwebtoken')
  // 用于判断存在
  var assert = require('http-assert')
  const AdminUser = require('../../models/AdminUser')
  const router = express.Router({
    // 合并app.use的url和这个文件里面的url
    mergeParams: true
  })

  // 第一次提交到数据库
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  // 获取数据库分类列表
  router.get('/', async (req, res) => {
    // 如果模型是分类模型才需要populate
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions)
    res.send(items)
  })

  // 根据id获取对应的数据（编辑时需要获取）
  router.get('/:id', async (req, res) => {
    // 这里的:id 在req.params.id获取
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  // 根据id更新对应的数据
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 根据id删除对应的数据
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      seccess: true
    })
  })

  // 登录校验中间件
  const authMiddleware = require('../../middleware/auth')

  const resourceMiddleware = require('../../middleware/resource')

  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)


  // express本身是不可以处理文件上传的，需要借助第三方multer
  // __dirname表示当前文件夹的绝对地址，dest表示需要保存的位置
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads' })
  // 添加一个中间件，上传一个文件，字段名是file，file是elementui规定的，也可以在el-upload修改
  app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  // 登录接口
  app.post('/admin/api/login', async (req, res) => {
    // 获取前端传过来的用户名和密码
    const { username, password } = req.body

    // 1.根据用户名找用户
    const user = await AdminUser.findOne({ username }).select('+password') // 因为select设置了false，所以加上这个需要取到password
    // 这里是抛出异常，然后app最后在处理异常
    assert(user, 422, '用户不存在')
    // if (!user) {
    //   return res.status(422).send({
    //     message: '用户不存在'
    //   })
    // }
    // 2.校验密码
    const isValid = require('bcrypt').compareSync(password, user.password) // 第一个参数为明文，第二个参数为散列后的值，对比相同返回true
    assert(isValid, 422, '密码错误')
    // if (!isValid) {
    //   return res.status(422).send({
    //     message: '密码错误'
    //   })
    // }
    // 3.返回token，npm i jsonwebtoken
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })
  })

  // 错误处理(4个参数)
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })

}