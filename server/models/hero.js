const mongoose = require('mongoose')

const schema = mongoose.Schema({
  // 英雄名称
  name: { type: String },
  // 头像地址
  avatar: { type: String },
  // 背景图
  banner: { type: String },
  // 称号
  title: { type: String },
  // 职位（和其他模型做关联的时候使用ObjectId,如果是关联多个的话,要放进一个数组中
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  // 难度分数
  scores: {
    difficult: { type: Number },
    skills: { type: Number },
    attack: { type: Number },
    survive: { type: Number }
  },
  // 技能
  skills: [{
    icon: { type: String },
    name: { type: String },
    delay: { type: String },
    cost: { type: String },
    description: { type: String },
    tips: { type: String }
  }],
  // 装备(顺风和逆风)
  items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  // 使用技巧
  usageTips: { type: String },
  // 对抗技巧
  battleTips: { type: String },
  // 团战技巧
  teamTips: { type: String },
  // 最佳搭档
  partners: [{
    hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
    description: { type: String }
  }]
})

module.exports = mongoose.model('Hero', schema, 'heroes')