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

  get(index) {
    if (this.head && index >= 0 && index < this.length) {
      let searchLeftToRight = Math.floor(this.length / 2) > index;
      let currNode = searchLeftToRight ? this.head : this.tail;
      let currIndex = searchLeftToRight ? 0 : this.length - 1;
      while (currNode) {
        if (currIndex === index) {
          return currNode;
        }
        currNode = searchLeftToRight ? currNode.next : currNode.prev;
        currIndex = searchLeftToRight ? currIndex + 1 : currIndex - 1;
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

  insert(index, val) {
    if (index >= 0 && index <= this.length) {
      if (index === this.length) {
        this.push(val);
      } else if (index === 0) {
        this.unshift(val);
      } else {
        let node = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;
        prevNode.next = node;
        node.prev = prevNode;
        node.next = nextNode;
        nextNode.prev = node;
        this.length++;
      }
      return true;
    }
    return false;
  }

  remove(index) {
    if (index >= 0 && index < this.length) {
      if (index === this.length - 1) {
        return this.pop();
      } else if (index === 0) {
        return this.shift();
      } else {
        let removedNode = this.get(index);
        let prevNode = removedNode.prev;
        let nextNode = removedNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removedNode.prev = null;
        removedNode.next = null;
        this.length--;
        return removedNode;
      }
    }
  }
}

let linkedList = new DoublyLinkedList();

console.log(linkedList.push(5));
console.log(linkedList.push(15));
console.log(linkedList.push(25));
console.log(linkedList.push(35));
console.log(linkedList.push(45));
console.log(linkedList.push(55));
console.log(linkedList.push(65));
console.log(linkedList.push(75));
console.log(linkedList.push(85));
console.log(linkedList.push(95));

console.log(linkedList.remove(9));
console.log(linkedList.remove(0));
console.log(linkedList.remove(6));

// console.log(linkedList.insert(11, 100));
// console.log(linkedList.insert(2, 20));
// console.log(linkedList.insert(0, 1));

// console.log(linkedList.set(4, 44));
// console.log(linkedList.set(11, 44));

// console.log(linkedList.get(2));
// console.log(linkedList.get(4));
// console.log(linkedList.get(5));

// console.log(linkedList.unshift(3));
// console.log(linkedList.unshift(2));

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