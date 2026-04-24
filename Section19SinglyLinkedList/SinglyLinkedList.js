class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.head) {
      let poppedNode = null;
      if (this.head.next) {
        let newTail = this.head;
        while (newTail.next.next) {
          newTail = newTail.next;
        }
        poppedNode = newTail.next;
        newTail.next = null;
        this.tail = newTail;
      } else {
        poppedNode = this.head;
        this.head = null;
        this.tail = null;
      }
      this.length -= 1;
      return poppedNode;
    }
    return undefined;
  }

  shift() {
    if (this.head) {
      let oldHead = this.head;
      this.head = oldHead.next;
      if (!oldHead.next) {
        this.tail = null;
      }

      // if (oldHead.next) {
      //   this.head = oldHead.next;
      // } else {
      //   this.head = null;
      //   this.tail = null;
      // }
      oldHead.next = null;
      this.length -= 1;
      return oldHead;
    }
    return undefined;
  }
}

let linkedList = new SinglyLinkedList();

console.log(linkedList.push(5));
console.log(linkedList.push(15));
console.log(linkedList.push(25));
console.log(linkedList.push(35));
console.log(linkedList.push(45));

console.log(linkedList.shift());
console.log(linkedList.shift());
console.log(linkedList.shift());
console.log(linkedList.shift());
console.log(linkedList.shift());
console.log(linkedList.shift());

// console.log(linkedList.pop());
// console.log(linkedList.pop());
// console.log(linkedList.pop());
// console.log(linkedList.pop());
// console.log(linkedList.pop());
// console.log(linkedList.pop());