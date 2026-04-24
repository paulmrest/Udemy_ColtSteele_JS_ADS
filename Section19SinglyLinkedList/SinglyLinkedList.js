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
    this.length++;
    return this;
  }

  pop() {
    if (this.head) {
      let oldTail = null;
      if (this.head.next) {
        let newTail = this.head;
        while (newTail.next.next) {
          newTail = newTail.next;
        }
        oldTail = newTail.next;
        newTail.next = null;
        this.tail = newTail;
      } else {
        oldTail = this.head;
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
      if (!oldHead.next) {
        this.tail = null;
      }
      oldHead.next = null;
      this.length--;
      return oldHead;
    }
    return undefined;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.head) {
      newNode.next = this.head;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (this.head && index >= 0 && index < this.length - 1) {
      let currNode = this.head;
      let currIndex = 0;
      while (currNode) {
        if (currIndex === index) {
          return currNode;
        }
        currNode = currNode.next;
        currIndex++;
      }
    }
    return null;
  }

  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
}

let linkedList = new SinglyLinkedList();

console.log(linkedList.push(5));
console.log(linkedList.push(15));
console.log(linkedList.push(25));
console.log(linkedList.push(35));
console.log(linkedList.push(45));

console.log(linkedList.set(2, "twenty-five"));
console.log(linkedList.set(0, "five"));
console.log(linkedList.set(5, "fifty-five"));

// console.log(linkedList.get(3));
// console.log(linkedList.get(0));
// console.log(linkedList.get(8));

// console.log(linkedList.unshift("four"));
// console.log(linkedList.unshift("three"));
// console.log(linkedList.unshift("two"));

// console.log(linkedList.shift());
// console.log(linkedList.shift());
// console.log(linkedList.shift());
// console.log(linkedList.shift());
// console.log(linkedList.shift());
// console.log(linkedList.shift());

// console.log(linkedList.pop());
// console.log(linkedList.pop());
// console.log(linkedList.pop());
// console.log(linkedList.pop());
// console.log(linkedList.pop());
// console.log(linkedList.pop());