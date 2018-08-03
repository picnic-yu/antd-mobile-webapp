'use strict';

const router = require('koa-router')();

const fs = require('fs');
const HttpStatus = require('../utils/httpStatusCode');
//set the api prefix
router.prefix('/api/v1');
// /api/v1/upload
router.post('/upload', async (ctx, next) => {
    console.log('开始上传文件')
    console.log(ctx.request.body)
    // console.log(ctx.request)
    const file = ctx.request.files.file;     // 获取上传文件
    const reader = fs.createReadStream(file.path);    // 创建可读流
    const ext = file.name.split('.').pop();        // 获取上传文件扩展名
    const upStream = fs.createWriteStream(`upload/${Math.random().toString()}.${ext}`);        // 创建可写流
    reader.pipe(upStream);    // 可读流通过管道写入可写流
    return ctx.body = '上传成功';
});
router.post('/test', async (ctx, next) => {
    
    console.log(ctx.request.body)
    console.log(ctx.request)
   
    return ctx.body = '上传成功';
});






const multer = require('koa-multer');//加载koa-multer模块
//文件上传
//配置
var storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  //修改文件名称
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
//加载配置
var upload = multer({ storage: storage });
//路由
router.post('/uploadImg', upload.single('file'), async (ctx, next) => {
  ctx.body = {
    filename: ctx.req.file.filename//返回文件名
  }
})
module.exports = router;