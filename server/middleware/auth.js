module.exports = aptions => {
  // jwt和AdminUser在所有路由里都用到所以提前
  const jwt = require('jsonwebtoken')
  // 用于判断存在
  var assert = require('http-assert')
  const AdminUser = require('../models/AdminUser')
  return async (req, res, next) => {
    // 校验用户是否登录
    const token = String(req.headers.authorization || "").split(' ').pop()
    // 如果token为空，抛出错误
    assert(token, 401, '请先登录(提供jwt token)')
    const { id } = jwt.verify(token, req.app.get('secret'))
    // 如果id错误
    assert(id, 401, '无效的jwt token')
    req.user = await AdminUser.findById(id)
    // 如果用户不存在，抛出错误
    assert(req.user, 401, '请先登录')
    await next()
  }
}