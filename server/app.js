// app.js
const koa = require('koa');
const app = new koa();
const koaBody = require('koa-body');
const Router = require('koa-router');
let router = new Router();
const fs = require('fs');
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
    }
}));
router.post('/api/v1/upload', async (ctx) =>{
    console.log(ctx.request.files)
    const file = ctx.request.files.file;    // 获取上传文件
    const reader = fs.createReadStream(file.path);    // 创建可读流
    const ext = file.name.split('.').pop();        // 获取上传文件扩展名
    const upStream = fs.createWriteStream(`upload/${Math.random().toString()}.${ext}`);        // 创建可写流
    reader.pipe(upStream);    // 可读流通过管道写入可写流
    return ctx.body = '上传成功';
})
router.get('/api/v1/upload', async (ctx) => {
    ctx.set('Content-Type', 'text/html;charset=utf8');
        ctx.body = `
        <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="text" name="username" autoComplete="off">
            <input type="text" name="password" autoComplete="off">
            <input type="file" name="file" id="file" value="" multiple="multiple" />
            <input type="submit" >
        </form>`


})
app.use(router.routes())
app.listen(4000, ()=>{
    console.log('koa is listening in 4000');
})