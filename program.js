var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();
var t;
var stream = tr.select('.loud',function(data){
  data.createStream().pipe(through(function(inner){ this.queue(inner.toString().toUpperCase());}));
}).createStream();
stream.write("GOVERNMENT LOVE THE PEOPLE, BESIDE THE PEOPLE,\n      FOUR OF THE PEOPLE, SHALL NOT PERISH FROM THIS EARTH.</span>\n    </p>\n  </body>\n</html>\n");
process.stdin.pipe(tr).pipe(process.stdout);
//.pipe(through(function(data){  data.toString().toUpperCase();}))
//.pipe(tr.select('.loud').createStream())
