class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.last) {
      this.last = newNode;
      this.first = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;

    return this;
  }

  dequeue() {
    if (!this.first) return null;

    const oldFirst = this.first;
    this.first = this.first.next;

    this.length--;

    if (this.length === 0) {
      this.last = null;
    }

    return oldFirst;
  }
}

const q = new Queue();
