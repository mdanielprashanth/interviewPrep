// Bind method EX:- 
class Bird {
    constructor(name) {
      this.name = name;  
    }

   
}
let canFly = function (parm) {
    console.log(`The ${this.name} can fly high. And ${parm}`)    
}

let baldEgale = new Bird("Bald Eagle");

let fly = canFly.bind(baldEgale);
fly();



/*
 POLYFILL (OUR OWN IMPLEMENTATION OF A EXSITING METHOD)

 Step 1: - Create a own polyfill function 

 Step 2: - Declare our function to the Function.Prototype to make it avilable to all methods
 
 Step 3: - 

*/

Function.prototype.myBind = function(...args) {
  let obj = this // this points to teh method on which bind is called
  let parms = args.slice(1)
  return function (...args2) {
      obj.apply(args[0], [...parms, args2] ) 
  }
}

let baldEgale1 = new Bird("Bald E");

let fly1 = canFly.myBind(baldEgale1);
fly1("dance");