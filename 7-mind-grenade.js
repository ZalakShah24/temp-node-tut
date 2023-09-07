const num1 = 5
const num2 = 10

function addValues(){
    console.log(`the sum is: ${num1 + num2}`)
}

addValues() //if we have function inside the module that we invoke, then that code will run where this file is exported even if we didn't assign any variable to invoke it in app.js(i.e. the file where we 'require' this file)