class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const el = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (el.priority >= parent.priority) break;

      this.values[parentIndex] = el;
      this.values[index] = parent;

      index = parentIndex;
    }
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp();
  }

  sinkDown() {
    let index = 0;
    const el = this.values[0];

    while (true) {
      let leftChildIdenx = 2 * index + 1;
      let leftChild;
      let rightChildIdenx = 2 * index + 2;
      let rightChild;
      let swap = undefined;

      if (leftChildIdenx < this.values.length) {
        leftChild = this.values[leftChildIdenx];
        if (leftChild.priority < el.priority) {
          swap = leftChildIdenx;
        }
      }

      if (rightChildIdenx < this.values.length) {
        rightChild = this.values[rightChildIdenx];
        if (
          (swap === undefined && rightChild.priority < el.priority) ||
          (swap !== undefined && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdenx;
        }
      }

      if (swap === undefined) break;

      this.values[index] = this.values[swap];
      this.values[swap] = el;

      index = swap;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }
}

const p = new PriorityQueue();

p.enqueue('Value 1', 1);
p.enqueue('Value 2', 3);
p.enqueue('Crazy value', 5);
p.enqueue('Holisss', 4);
p.enqueue('asfafa', 2);
p.enqueue('12412412', 1);
