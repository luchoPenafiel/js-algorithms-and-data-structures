class Node {
  constructor(value) {
    this.value = value;
    this.count = 1;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;

      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) {
        current.count++;
        return this;
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;

    let current = this.root;

    while (true) {
      if (value === current.value) {
        return current;
      }

      if (value < current.value) {
        if (current.left === null) return undefined;

        if (current.left.value === value) {
          return current.left;
        }
        current = current.left;
      } else {
        if (current.left === null) return undefined;

        if (current.right.value === value) {
          return current.right;
        }
        current = current.right;
      }
    }
  }

  BFS() {
    let node = this.root;
    const data = [];
    const queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();

      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  DFSPreOrder() {
    const data = [];

    const traverse = (node) => {
      data.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return data;
  }

  DFSPostOrder() {
    const data = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node.value);
    };

    traverse(this.root);

    return data;
  }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

tree.DFSPostOrder();
