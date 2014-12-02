var through =require('through');
var split = require('split');

var tr = through(write);
var i=1;
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
function write (line) {
  if(i%2==1)
    this.queue(line.toString().toLowerCase()+'\n');
  else
    this.queue(line.toString().toUpperCase()+'\n');

    i++
}
