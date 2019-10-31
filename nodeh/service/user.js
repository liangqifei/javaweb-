var express = require("express");
var mysql = require('mysql');
var config = require('../mysql')
var msgResult=require('../utils/result.js')
var router = express.Router();
let pool = mysql.createPool(config);
router.post("/login", function (req, res, next) {
  pool.getConnection((err, connection) => {
    let result=new msgResult()
    if (err) {
      result._code=0
      result._success=false
      result._message='error'
      result._data=null
      res.send(result)
    } else {
      let a=req.body&&req.body.name
      let sql = `select * from user where name = '${a}' `
      connection.query(sql, (err, rows) => {
        if (err) {
          result._code=0
          result._success=false
          result._message='error'
          result._data=null
        } else {
          if (rows&&rows.length<=0) {
            result._code=1
            result._success=false
            result._message='error'
            result._data=null
          }else{
            result._data=rows
          }
        }
        res.send(result)
        connection.release()
      })
    }
  })
});
router.get("/userSearch", function (req, res, next) {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error(err)
    } else {
      let a = req.query&&req.query.name
      let sql = `select * from user where name = '${a}' `
      connection.query(sql, (err, rows) => {
        if (err) {
          console.error(err)
        } else {
          res.send(rows)
        }
        connection.release()
      })
    }
  })
});
router.post("/useradd", function (req, res, next) {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error(err)
    } else {
      let a = req.query&&req.query.name
      let sql = `select * from user where name = '${a}' `
      connection.query(sql, (err, rows) => {
        if (err) {
          console.error(err)
        } else {
          res.send(rows)
        }
        connection.release()
      })
    }
  })
});
module.exports = router;