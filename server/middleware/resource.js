module.exports = options => {
  return async (req, res, next) => {
    // 将首字母小写且复数形式的单词，变成，首字母大写的单数形式
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../models/${modelName}`)
    next()
  }
}