/**
 * Created by zenmind on 2015-06-11.
 */
var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("../03.example_ch9/src"));

app.use('/css', serveStatic(__dirname + '/node_modules/bootstrap/dist/css/'));

app.use('/scripts', serveStatic(__dirname + '/node_modules/angular/'));

app.listen(5000);

console.log("localhost:5000");