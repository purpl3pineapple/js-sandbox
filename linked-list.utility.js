class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
    this.size = 0;
  }

  shift() {
    if (this.head) {
      let node = new Node(this.head.data);

      this.head = this.head.next;

      this.size--;

      if (this.size === 0) {
        this.tail = null;
      }

      return node.data;
    } else {
      return this.head;
    }
  }

  insertAt(index, data) {
    const node = new Node(data);
    let current = this.head;
    let track = 0;
    let previous = null;

    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      while (track < index) {
        previous = current;
        current = current.next;
        track++;
      }

      node.next = current;
      previous.next = node;
    }
  }

  removeFrom(index) {
    let current = this.head;
    let track = 0;
    let previous = null;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      while (track < index) {
        previous = current;
        current = current.next;
        track++;
      }

      previous.next = current.next;
      this.size--;
    }
  }

  add(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.size++;
  }

  get(index) {
    let current = this.head;
    let idx = 0;

    if (index > this.size) {
      console.log("Index not found");
      return;
    }

    while (idx < index) {
      current = current.next ?? current;
      idx++;
    }

    return current.data;
  }

  forEach(callback) {
    let current = this.head;

    while (current) {
      callback(current.data);
      current = current.next;
    }
  }

  map(callback) {
    let newList = new LinkedList();
    let curr = this.head;

    while (curr != null) {
      newList.add(new Node(callback(curr.data)));
      curr = curr.next;
    }

    return newList;
  }

  getLast() {
    return this.tail;
  }

  pop() {
    let node = this.head;
    let previous = null;

    while (node && node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
    this.tail = previous;
    this.size--;

    return node.data;
  }

  printAll() {
    let curr = this.head;
    let str = "";
    while (curr) {
      console.log(curr.data);
      str += curr.data;
      curr = curr.next;
    }

    return str;
  }

  toArray() {
    let curr = this.head;
    const arr = [];
    while (curr) {
      arr.push(curr.data);
      curr = curr.next;
    }
    return arr;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }
}
