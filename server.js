// server.js

// expressの呼び込み
var express = require("express");
// var path = require("path");
var serveStatic = require("serve-static");
// express()のインスタンス
var app = express();
// どこにアクセスさせるかの設定
// distフォルダ：コンパイルされたファイルが入る場所
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log("server started " + port);
