const { readFileSync, writeFileSync } = require("fs") // require{'fs} includes the file system module

console.log('start');

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8') //utf-8: Unicode Transformation Format - 8 bits

console.log(first,second);

writeFileSync('./content/result-sync.txt',
                `Here is the result: ${first},${second}`,
                {flag:'a'}
             )
console.log('done with this task');
console.log('starting the next one');