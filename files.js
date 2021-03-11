const fs = require('fs');

//reading files

//asyncronous call
fs.readFile('./docs/blog_sample.txt',(err,data)=>{
if(err){console.log(err);}
console.log(data.toString());
});

console.log('last line');

//writing files

fs.writeFile('./docs/blog_sample.txt','hello world. it is replaced',
()=>{console.log('file was written');
});

fs.writeFile('./docs/blog_sample1.txt','hello world. it is written as new file if not exists',
()=>{console.log('file was written');
});
//directories

if(!fs.existsSync('./assets1')){
fs.mkdir('./assets1',(err)=>{
    if(err){console.log(err);}
    console.log('folder created')
})}
else{
    fs.rmdir('./assets1',(err)=>{
        if(err){console.log(err);}
    })
}

//delete files

if(fs.existsSync('./docs/deleteme.txt'))
{
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}