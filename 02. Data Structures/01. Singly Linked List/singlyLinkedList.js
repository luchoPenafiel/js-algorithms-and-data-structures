class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  toArray() {
    const list = [];
    let currentNode = this.head;
    let counter = 0;

    while (counter < this.length) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
      counter++;
    }

    return list;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;
    this.head = oldHead.next;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }

    this.head = newNode;

    this.length++;

    return this;
  }

  get(index) {
    if (0 > index || index >= this.length) {
      return undefined;
    }

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, value) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.value = value;

      return this;
    }

    return undefined;
  }

  insert(index, value) {
    if (0 > index || index > this.length) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);

    const prev = this.get(index - 1);
    const temp = prev.next;

    prev.next = newNode;
    newNode.next = temp;

    this.length++;

    return this;
  }

  remove(index) {
    if (0 > index || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const prev = this.get(index - 1);
    const removed = prev.next;

    prev.next = removed.next;

    this.length--;

    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    /*
      Initial State:
      prev: null
      node: A
        next: B  ==> A -> B -> C -> D
      next: null

      Loop 0:
      prev: A
      node: B
        next: C  ==>  A -> B -> C -> D
      next: B

      Loop 1:
      prev: B
      node: C
        next: D  ==>  A <- B -> C -> D
      next: C

      Loop 2:
      prev: C
      node: D
        next: null  ==>  A <- B <- C -> D
      next: D

      Loop 3:
      prev: D
      node: null
        next: C  ==>  A <- B <- C <- D
      next: null
    */

    return this;
  }
}

const l = new SinglyLinkedList();

l.push('A');
l.push('B');
l.push('C');
l.push('D');
