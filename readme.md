# wang-moba

wang-moba是使用 Node.js (Express.js) + Vue.js (Element UI) + Mongoose (数据库)全栈开发的王者荣耀手机端官网和管理后台项目

## 项目布局

```
admin  -- 后台项目
web    -- 前台项目
server -- 服务端
└── admin-api -- 后台管理系统的接口
    ├── handle.js -- 路由处理
    ├── router.js -- 路由定义
├── models -- 数据库模型
├── public -- 静态资源文件
└── upload -- 上传文件保存目录
    ├── images -- 存放上传图片
    ├── video -- 存放上传视频
├── utils -- 工具类
└── web-api -- 前台项目的接口
    ├── handle.js -- 路由处理
    ├── router.js -- 路由定义
├── app.js -- 项目入口文件
```

## 后台管理

基于Element UI的后台管理基础界面搭建

创建分类

分类列表

修改分类

删除分类

子分类

通用 CRUD 接口

装备管理

图片上传 (multer)

英雄管理

编辑英雄 (关联,多选,el-select, multiple)

技能编辑

文章管理

富文本编辑器 (quill)

首页广告管理

管理员账号管理 (bcrypt)

登录页面

登录接口 (jwt,jsonwebtoken)

服务端登录校验

客户端路由限制 (beforeEach, meta)

上传文件的登录校验 (el-upload, headers)

## 前台项目

"工具样式"概念和 SASS (SCSS)
样式重置
网站色彩和字体定义 (colors, text)
通用flex布局样式定义 (flex)
常用边距定义 (margin, padding)
主页框架和顶部菜单
首页顶部轮播图片 (vue swiper)
使用精灵图片 (sprite)
使用字体图标 (iconfont)
卡片组件 (card)
列表卡片组件 (list-card, nav, swiper)
首页新闻资讯-数据录入(+后台bug修复)
首页新闻资讯-数据接口
首页新闻资讯-界面展示
首页英雄列表-提取官网数据
首页英雄列表-录入数据
首页英雄列表-界面展示
新闻详情页
新闻详情页-完善
英雄详情页-1-前端准备
英雄详情页-2-后台编辑
英雄详情页-3-前端顶部
英雄详情页-4-完善

