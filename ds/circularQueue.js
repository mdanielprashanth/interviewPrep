// A Circular Queue is Data structre which follws principle FIFO - (FIRST IN FIRST OUT) it has fixed size

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


class CircularQueue {
    constructor(capacity) {
       this.items = new Array(capacity);
       this.capacity = capacity;
       this.currentLength = 0;
       this.front = -1; 
       this.rear = -1; 

    }
    
    
    isFull(){
        return this.currentLength === this.capacity
    }

    isEmpty(){
        return this.currentLength === 0
    }

    enqueue(value){
       if(!this.isFull()){
        this.rear = (this.rear + 1) % this.capacity
        this.items[this.rear] = value;
        this.currentLength = this.currentLength + 1;
        if(this.front === -1){
            this.front = this.rear;
        }
       } 
    }

    dequeue(){
       if(this.isEmpty()){
        return null;
       }
       const item = this.items[this.front];
       this.items[this.front] = null;
       this.front = (this.front + 1) % this.capacity; 
       this.currentLength -= 1;
       if(this.isEmpty()){
        this.front = -1;
        this.rear = -1;
       }

    }

    
    peek(){
        if(this.isEmpty()) return "IS EMPTY";
        console.log(`${this.items[this.front]} This is the first item of the array`);
    }

    size(){
        console.log(`The size of the of the array ${this.items.length}`);
    }

    print(){
        if(this.isEmpty()) return console.log(`queue is empty`)
        let i;
        let str = '';
        for(i = this.front; i!== this.rear; i = (i+1) % this.capacity ){
            str +=this.items[i] + " "
        }
        str +=this.items[i] 
        console.log(str)
            
    }

}

const circularQueueObj = new CircularQueue(5);

circularQueueObj.enqueue(1);
circularQueueObj.enqueue(2);
circularQueueObj.enqueue(3);
circularQueueObj.enqueue(4);
circularQueueObj.enqueue(5);

circularQueueObj.print();

circularQueueObj.dequeue();

circularQueueObj.print();


circularQueueObj.peek();



