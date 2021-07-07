var fs = require('fs');

fs.readdir('.', function(err, filename){
    for(var i = 0; i < filename.length; i++){
        console.log(filename[i]);
    }
    console.log('ready');
});

console.log('can process next job..');