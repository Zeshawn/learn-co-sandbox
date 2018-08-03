var funkyFunction = function outsideFunction(){
   return function insideFunction(){
     return "FUNKY!"
   }
}

console.log(funkyFunction)