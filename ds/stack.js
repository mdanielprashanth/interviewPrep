// The Stack follows the principle of LIFO - (LAST IN FIRST OUT )

class Stack {
    constructor() { 
       this.array = []; 
    }
    
    push(element) {
       this.array.push(element);    
    }

    remove(){
      if(this.array.length === 0) return console.log(`The array is empty`) 
      this.array.shift(this.array[0])  
    }

    printArray(){
        console.log(this.array)
    }

}

const stackObj = new Stack();

stackObj.push(2);
stackObj.push(3);
stackObj.push(4);

stackObj.printArray();

stackObj.remove();

stackObj.printArray();

stackObj.remove();

stackObj.printArray();

stackObj.remove();
stackObj.printArray();


stackObj.remove();
