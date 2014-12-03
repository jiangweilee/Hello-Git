var http = require('http');
var fs = require('fs');
var through = require('through')

var server = http.createServer(function (req, res) {
  req.pipe(through(function(buff){
    this.queue(buff.toString().toUpperCase());
  })).pipe(res);

}).listen(process.argv[2]);
