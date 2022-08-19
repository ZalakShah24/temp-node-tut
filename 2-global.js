/*Globals - No window(can access these variables anywhere in the application)

__dirname - path to current directory
__filename - file name
require - func to use modules (Common JS)
module - info about current module (file)
process - info abt env where the program is being executed*/

console.log(__dirname);
setInterval(()=>{
    console.log('hello World')
},1000) 