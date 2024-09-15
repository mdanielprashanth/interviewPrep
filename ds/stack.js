// The Stack follows the principle of FILO - (FIRST IN LAST OUT )

class Stack {
    constructor() { 
       this.array = []; 
    }
    
    push(element) {
       this.array.push(element);    
    }

    remove(){
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
