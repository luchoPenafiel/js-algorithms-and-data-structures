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
}

const g = new WeightedGraph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');

g.addEdge('A', 'B', 9);
g.addEdge('A', 'C', 5);
g.addEdge('B', 'C', 7);
