class Node {
  constructor(val, priority) {
    this.val = val;
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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    } else {
      throw new Error('The vertex already exists.');
    }
  }

  addEdge(v1, v2, weight) {
    if (this.adjacencyList[v1]) {
      if (this.adjacencyList[v2]) {
        this.adjacencyList[v1].push({ vertex: v2, weight });
        this.adjacencyList[v2].push({ vertex: v1, weight });
      } else {
        throw new Error(`${v2} dosen't exists`);
      }
    } else {
      throw new Error(`${v1} dosen't exists`);
    }
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let path = [];

    // Build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    // As long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === finish) {
        // We are DONE!

        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // Find neighboring nodes
          let nextNode = this.adjacencyList[smallest][neighbor];

          // Calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nexNeighbor = nextNode.vertex;

          if (candidate < distances[nexNeighbor]) {
            // Updating new smallest distances to neighbor
            distances[nexNeighbor] = candidate;
            // updateing previous
            previous[nexNeighbor] = smallest;
            // enqueue in priority queue
            nodes.enqueue(nexNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

const g = new WeightedGraph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);

g.dijkstra('A', 'E');
