// expressの呼び込み
var express = require("express");

var serveStatic = require("serve-static");

// express()のインスタンス
var app = express();

// どこにアクセスさせるかの設定
// distフォルダ：コンパイルされたファイルが入る場所
app.use(serveStatic(__dirname + "/dist"));

// PORTの設定
// もしenvにportが確立したらそのポートを、していなかったら5000を使う
var port = process.env.PORT || 5000;

// 上記で指定したportをlisten
app.listen(port);

// 動いてるかどうかconsoleで見る
console.log("server started " + port);
