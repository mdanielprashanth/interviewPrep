import LinkedList from "./linkedListWithTail.js";

class StackLinkedList {
    constructor() {
       this.list = new LinkedList() 
    }

    push(value){
        this.list.prepend(value);
    } 

    pop(){
        this.list.removefromFront()
    }

    peek(){
        return this.list.head
    }

    isEmpty(){
       return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        return this.list.print()  
    }


}



const StackLinkedListObj = new StackLinkedList();


StackLinkedListObj.push(1)
StackLinkedListObj.push(2)
StackLinkedListObj.push(3)

StackLinkedListObj.print()
StackLinkedListObj.pop()
StackLinkedListObj.print()


console.log(StackLinkedListObj.isEmpty());
console.log(StackLinkedListObj.getSize());


