const {readFile,writeFile} = require('fs');

readFile('./content/first.txt', 'utf-8',(err,result)=>{
        if(err) throw err;
        const firstFileContent = result;
    readFile('./content/subfolder/second.txt', 'utf-8',(err,result)=>{
        if(err) throw err;
        const secondFileContent = result;
        const data = `Here is the result two: ${firstFileContent},${secondFileContent}`;
        writeFile('./content/result.txt', data,(err,writeFileResult)=>{
            if(err) throw err;
        });
    });
});


