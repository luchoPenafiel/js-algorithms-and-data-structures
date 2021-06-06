class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const el = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (el <= parent) break;

      this.values[parentIndex] = el;
      this.values[index] = parent;

      index = parentIndex;
    }
  }

  insert(value) {
    this.values.push(value);
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
        if (leftChild > el) {
          swap = leftChildIdenx;
        }
      }

      if (rightChildIdenx < this.values.length) {
        rightChild = this.values[rightChildIdenx];
        if (
          (swap === undefined && rightChild > el) ||
          (swap !== undefined && rightChild > leftChild)
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

  extracMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }
}

const h = new MaxBinaryHeap();

h.insert(41);
h.insert(39);
h.insert(33);
h.insert(18);
h.insert(27);
h.insert(12);
h.insert(55);
