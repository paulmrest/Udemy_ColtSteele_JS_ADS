class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let node = new Node(val);
    if (this.head) {
      this.tail.next = node;
      node.prev = this.tail;
    } else {
      this.head = node;
    }
    this.tail = node;
    this.length++;
    return this;
  }

  pop() {
    if (this.head) {
      let oldTail = this.tail;
      if (oldTail.prev) {
        this.tail = oldTail.prev;
        this.tail.next = null;
        oldTail.prev = null;
      } else {
        this.head = null;
        this.tail = null;
      }
      this.length--;
      return oldTail;
    }
    return undefined;
  }

  shift() {
    if (this.head) {
      let oldHead = this.head;
      this.head = oldHead.next;
      if (this.head?.prev) {
        this.head.prev = null;
      }
      oldHead.next = null;
      this.length--;
      return oldHead;
    }
    return undefined;
  }

  unshift(val) {
    let node = new Node(val);
    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
}

let linkedList = new DoublyLinkedList();

console.log(linkedList.push(5));
// console.log(linkedList.push(15));
// console.log(linkedList.push(25));
// console.log(linkedList.push(35));
// console.log(linkedList.push(45));

// console.log(linkedList.unshift(3));
// console.log(linkedList.unshift(2));

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