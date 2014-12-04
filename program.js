var combine = require('stream-combiner')
var split = require('split')
var zlib = require('zlib')
var through = require('through')

module.exports = function () {
  var grouper = through(write,end);
  var result;

  function write(line){
    if(line.length===0)return;
    var content = JSON.parse(line);
    if(content.type=='genre'){
      if(result){
        this.queue(JSON.stringify(result)+'\n');
      }
      result = {name:content.name,books:[]};
    }else{
      result.books.push(content.name);
    }
  }

  function end(){
    if(result)
        this.queue(JSON.stringify(result)+'\n');
    //else  don't use this
        this.queue(null);
      }
      return combine(split(),grouper,zlib.createGzip());
    }
