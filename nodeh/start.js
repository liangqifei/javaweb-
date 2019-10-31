
var createError = require("http-errors");//错误处理
var express = require("express");
var path = require("path");//路径
var bodyParser = require("body-parser");//body 转化
var multer = require("multer");
var cookieParser = require("cookie-parser");//cookie 转化
var logger = require("morgan");
var qs = require("qs");//参数格式话
var app = express()
var router = express.Router();
router.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
//通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了：
app.use(express.static('public'))
//日志
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
var indexRouter = require('./service/index')
var userRouter = require('./service/user')
//添加路由
app.use("/", indexRouter);
app.use("/user", userRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.listen(5555);