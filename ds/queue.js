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


class Queue {
    constructor() {
       this.array = []; 
    }

    emptyCheck(){
        if (this.array.length === 0) return true;
    }
    logMessage(){
       return console.log("The array is empty")
    }

    enqueue(value){
       this.array.push(value);
    }

    dequeue(){
        this.array.shift();
    }

    peek(){
        if(this.emptyCheck) return this.logMessage();
        console.log(`${this.array[0]} This is the first item of the array`);
    }

    isEmpty(){
        if(this.emptyCheck) return this.logMessage();
        console.log("The array is not empty");
    }

    size(){
        console.log(`The size of the of the array ${this.array.length}`);
    }

    print(){
        console.log(`The items in the array - ${this.array}`);
    }

}


const queueObj = new Queue();

// queueObj.isEmpty();

// queueObj.peek();

// queueObj.size();

// queueObj.print();

// queueObj.enqueue(3);
// queueObj.enqueue(4);
// queueObj.enqueue(5);

// queueObj.print();


// queueObj.dequeue();

// queueObj.print();

// queueObj.dequeue();

// queueObj.print();

// queueObj.dequeue();

// queueObj.print();


/**
 *  ! Optimised version with objects remove linear time complexity when we dequeue 
 */


class QueueObjectImplemntation {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(value){
       this.items[this.rear] = value;
       this.rear++; 
    }

    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    print(){
        console.log(this.items)
    }

}

let QueueObjectImplemntationObj = new QueueObjectImplemntation();

QueueObjectImplemntationObj.enqueue(3);

QueueObjectImplemntationObj.print();

QueueObjectImplemntationObj.enqueue(4);

QueueObjectImplemntationObj.print();

QueueObjectImplemntationObj.dequeue();

QueueObjectImplemntationObj.print();

QueueObjectImplemntationObj.dequeue();

QueueObjectImplemntationObj.print();
