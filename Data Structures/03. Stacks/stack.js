class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.lengt = null;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.first) return null;

    const oldFirst = this.first;
    this.first = oldFirst.next;

    this.length--;

    if (this.length === 0) {
      this.last = null;
    }

    return oldFirst;
  }
}

const s = new Stack();
