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

  depthFirstRecursive(start) {
    const resutl = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      resutl.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return resutl;
  }

  depthFirstIterative(start) {
    const stack = [start];
    const resutl = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      resutl.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return resutl;
  }

  breadthFirst(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

g.breadthFirst('A');

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
