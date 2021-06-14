class Graph {
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

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        const removedVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, removedVertex);
      }

      delete this.adjacencyList[vertex];
    } else {
      throw new Error(`${vertex} dosen't exists.`);
    }
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1]) {
      if (this.adjacencyList[v2]) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
      } else {
        throw new Error(`${v2} dosen't exists`);
      }
    } else {
      throw new Error(`${v1} dosen't exists`);
    }
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1]) {
      if (this.adjacencyList[v2]) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
      } else {
        throw new Error(`${v2} dosen't exists`);
      }
    } else {
      throw new Error(`${v1} dosen't exists`);
    }
  }
}

const g = new Graph();

g.addVertex('San Francisco');
g.addVertex('Hong Kong');
g.addVertex('Los Angeles');
g.addVertex('New York');
g.addVertex('Tokio');
g.addVertex('Dallas');
g.addVertex('Aspen');

g.addEdge('Tokio', 'Aspen');
g.addEdge('Tokio', 'Dallas');
g.addEdge('Tokio', 'New York');
g.addEdge('Dallas', 'Aspen');
g.addEdge('New York', 'Hong Kong');

g.removeEdge('Tokio', 'Aspen');

g.removeVertex('Tokio');
