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

  set(index, value) {
    const node = this.get(index);

    if (!node) {
      return undefined;
    } else {
      node.value = value;

      return this;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    const newNode = new Node(val);
    let oldNode = this.get(index);

    newNode.next = oldNode;
    newNode.prev = oldNode.prev;

    const temp = oldNode;
    oldNode.prev.next = newNode;
    temp.prev = newNode;

    this.length++;

    return this;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    let node = this.get(index);
    const temp = node;

    node.prev.next = node.next;
    node.next.prev = temp.prev;

    node.next = null;
    node.prev = null;

    this.length--;

    return node;
  }

  reverse() {
    let current = this.head;
    const oldHead = this.head;
    let counter = 0;

    this.head = this.tail;
    this.tail = oldHead;

    while (counter != this.length) {
      const temp = current.next;

      current.next = current?.prev || null;
      current.prev = temp || null;

      current = temp;
      counter++;
    }

    return this;
  }
}

const l = new DoublyLinkedList();

l.push('A');
l.push('B');
l.push('C');
l.push('D');
l.push('E');
l.push('F');
l.push('G');
l.push('H');
l.push('I');
l.push('J');
