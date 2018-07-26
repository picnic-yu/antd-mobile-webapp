`use strict`;

const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const logger = require('koa-logger') ;
const koaBetterBody = require('koa-better-body')
const controller = require('./controller');

const app = module.exports = new Koa();

const koaBody = require('koa-body');

app.use(koaBody({
    multipart: true,
   
}));



app.use(bodyParser());
//log middleware
//app.use(logger());

//在router之前引入bodyPaeser
// app.use(bodyParser({
//     jsonLimit:'10mb',
//     formLimit:'1000mb'
// }));
// app.use(koaBetterBody({
//     fields:'body'
// }));
app.use(controller());

if(!module.parent){
    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => { console.log(`App started at port ${PORT}...`); });    
}
