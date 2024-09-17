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
      this.size = 0;
    }

    isEmpty(){
      return this.size === 0
    }

    getSize(){
        return this.size
    }
   
    // O(1) 
    prepend(value){
      const node = new Node(value);
      if(this.isEmpty()){
        this.head = node;
      }else{
        node.next = this.head; //point new created node to next node 
        this.head = node //make the head to poin to newly created node
      }
      this.size++;
    }
    // O(n) because of while loop and prev value needs to be traveresed from first node 
    append(value){
     const node = new Node(value);
     if(this.isEmpty()){
      this.head = node
     }else{
       let prev = this.head;
       while(prev.next){
        prev = prev.next
       }
       prev.next = node
     }
     this.size++
    }

    insert(value, index){
      if(index < 0 || index > this.size) return

      if(index === 0){
        this.prepend(value)
      }else{
        let node = new Node(value)
        let prev = this.head
        for(let i=0;i<index-1;i++){
          prev = prev.next
        }
        node.next = prev.next
        prev.next = node 
        this.size++;
      }
    }

    removefrom(index){
      if(index < 0 || index > this.size) return 

      let removedNode;
      if(index === 0){
        //make the first node head point to its next node head and then garabage collect old node and delete
        removedNode = this.head;
        this.head = this.head.next; 
      }else{
        let prev = this.head;
        for(let i=0;i < index-1; i++){
          prev = prev.next
        }
        removedNode = prev.next;
        prev.next = removedNode.next; 
      }
      this.size--
      return removedNode.value;
    }

    print(){
      if(this.isEmpty()) return console.log(`This list empty`)
       
      let curr = this.head;
      let str = '';
      while(curr){
        str += `${curr.value} ` 
        curr = curr.next
      }  

      console.log(str)
    }

    search(value){
      if(this.isEmpty()) return -1;
      let i =0;
      let curr = this.head;
      while(curr){
        if(curr.value === value){
            return i
        }
        curr = curr.next; 
        i++;
      }
      return -1;
    }

    reverse(){
      let prev = null;
      let curr = this.head;
      while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next
      }
      this.head = prev 
    }


}


let linkedListObj = new LinkedList();

// linkedListObj.prepend(5)
// linkedListObj.prepend(6)
// linkedListObj.prepend(7)


linkedListObj.append(5)
linkedListObj.append(7)
linkedListObj.append(8)

linkedListObj.insert(6, 1)

// let removednode = linkedListObj.removefrom(2)
// console.log(removednode);

// linkedListObj.print()

// console.log(linkedListObj.search(9));

linkedListObj.reverse();

linkedListObj.print()