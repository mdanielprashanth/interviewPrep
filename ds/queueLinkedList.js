import LinkedList from "./linkedListWithTail.js";


// A queue is Data structre  which follws principle FIFO - (FIRST IN FIRST OUT)

/**
 * ? Operations to perfomed in the Queue ?
 * 
 * 1. enqueue(element) - add an element from the rear end to the queue
 * 2. dequeue() -  remove the last element from the front of the queue
 * 3. peek() - get the value of the element at the front of the queue without removing it.
 * 4. isEmpty() - check if the queue is empty
 * 5. size() - get the number of elements of the queue  
 * 6. print() - visualize teh elements of the queue 
 */


class QueueLinkedList {
    constructor() {
      this.list = new LinkedList()
    }

    enqueue(value){
      this.list.prepend(value)
    }

    dequeue(){
      this.list.removefromFront()
    }

    peek(){
       return this.peek() 
    }
    isEmpty(){
      return this.list.isEmpty()
    }
    size(){
      return this.list.getSize()
    }
    print(){
      return this.list.print()
    }
        
}

let QueueLinkedListObj = new QueueLinkedList();

QueueLinkedListObj.enqueue(3);

QueueLinkedListObj.print();

QueueLinkedListObj.enqueue(4);

QueueLinkedListObj.print();

QueueLinkedListObj.dequeue();

QueueLinkedListObj.print();

QueueLinkedListObj.dequeue();

QueueLinkedListObj.print();
