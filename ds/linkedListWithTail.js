/**
 * Linked List has the last node pointing towards null 
 * 
 * each node has a value and a pointer to the next node
 * 
 */


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    // O(1) 
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    // O(n) because of while loop and prev value needs to be traveresed from first node 
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }


    removefromFront() {
        if (this.isEmpty()) return null
        const value = this.head.value;
        this.head = this.head.next
        this.size--
        return value
    }
    removefromEnd() {
        if (this.isEmpty()) return null
        const value = this.tail.value;
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{   
            let prev = this.head;
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }

    print() {
        if (this.isEmpty()) return console.log(`This list empty`)

        let curr = this.head;
        let str = '';
        while (curr) {
            str += `${curr.value} `
            curr = curr.next
        }

        console.log(str)
    }


}


// let linkedListObj = new LinkedList();

// linkedListObj.print()


// linkedListObj.append(1)
// linkedListObj.append(2)
// linkedListObj.append(3)
// linkedListObj.prepend(0)

// linkedListObj.print()


// linkedListObj.removefromFront()
// linkedListObj.print()

// linkedListObj.removefromEnd();
// linkedListObj.print();

export default LinkedList
