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
}

let tree = new BinarySearchTree();
