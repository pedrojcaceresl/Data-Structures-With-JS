/***
 * ------------------- SINGLY LINKED LISTS -----------------
 * OBJECTIVES:
 * - Define Singly Linked List
 * - Compare Linked List with Array
 * - Implement insertion, removal and traversal
 * methods on Singly Linked Lists
 */

/**
 * WHAT IS A LINKED LIST?
 * A data structure that contains head, tail and length property
 * Linked List cosist of nodes, and each node has a value and points to another node or null. 
 Link for visual reference https://visualgo.net/en/list
 
 */

/**
 * COMPARISON
 * LISTS:
 *     - Do not have indexes
 *     - Connected vida nodes with a next pointer
 *     - Random acces is not allowed
 * ARRAYS:
 *     - Indexes in order
 *     - Insertion and deletion can be expensive
 *     - Can quickly accessed at a specific index
 */

// Node class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Singly Linked List Class
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Push method
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Pop method
  pop() {
    // 1 - 2 - 3 - 4
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    if (this.length == 0) {
      this.head = null;
      this.tail = this.head;
    }
    this.length--;
    return currentNode;
  }
  // Shift method
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return oldHead;
  }
  // Unshift method
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // Get method
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let i = 0;
    let currentNode = this.head;
    while (i !== index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }
  // Set method
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }
  // Insert method
  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    let newNode = new Node(value);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  // Remove method
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  // Reverse method
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  //print

  printList() {
    if (!this.head) return undefined;
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("2");
list.push("3");
// list.unshift(1);
// list.unshift(6);
// list.unshift(9);
list.remove(1);
list.printList();
