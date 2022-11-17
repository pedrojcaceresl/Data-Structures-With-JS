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
    if (!this.first) return null;
    let poppedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = poppedNode.next;
    this.size--;
    return poppedNode.value;
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
console.log(stack.pop());
console.log(stack.pop());
