/**
 * Created by zenmind on 2015-06-11.
 */
var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect;

app.use(serveStatic("../03.example_ch9"));

app.listen(5000);