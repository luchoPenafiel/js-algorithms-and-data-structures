class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let el = this.tail;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = el.prev;
      this.tail.next = null;
      el.prev = null;
    }

    this.length--;

    return el;
  }

  shift() {
    if (this.length === 0) return undefined;

    let el = this.head;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = el.next;
      this.head.prev = null;
      el.next = null;
    }

    this.length--;

    return el;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return undefined;

    let counter = undefined;
    let current = undefined;
    let dir = undefined;

    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      dir = 'next';
    } else {
      counter = this.length - 1;
      current = this.tail;
      dir = 'prev';
    }

    while (counter !== index) {
      current = current[dir];
      dir === 'next' ? counter++ : counter--;
    }

    return current;
  }
}

const l = new DoublyLinkedList();

l.push('A');
l.push('B');
l.push('C');
l.push('D');
l.push('E');
l.push('F');
l.push('H');
l.push('I');
l.push('J');
l.push('K');
