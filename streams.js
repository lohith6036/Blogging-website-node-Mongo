const fs = require('fs');


const readStream = fs.createReadStream('./docs/blog_sample1.txt',{encoding:'utf-8'});

const writeStream = fs.createWriteStream('./docs/blog2.txt');


// readStream.on('data',(chunk)=>{
//     console.log('------new chunk---');
//     console.log(chunk);

//     writeStream.write("\nNew chunk\n")
//     writeStream.write(chunk);
// });



//pipes

readStream.pipe(writeStream);


