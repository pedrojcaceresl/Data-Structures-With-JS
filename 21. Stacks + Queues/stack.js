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
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return undefined;
    let removedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return removedNode;
  }

  print() {
    let node = this.first;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}

stack = new Stack();
stack.push("FIRST");
stack.push("SECOND");
stack.push("THIRD");
stack.print();
