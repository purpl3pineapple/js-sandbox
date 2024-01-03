class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  shift(data) {
    let node = new ListNode(data);

    node.next = this.head;

    this.head = node;

    this.size++;
  }

  add(data) {
    let node = new ListNode(data);

    let current;

    if (this.head === null) {
      this.head = node;
      this.size++;
      return;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  forEach(callback, arg) {
    let current = this.head;

    while (current) {
      callback(current.data);
      current = current.next;
    }
  }

  static map(start, callback) {
    let curr = start;
    let temp = null;

    while (curr != null) {
      temp = curr.next;
      curr.next = new ListNode(callback(curr.data));
      curr.next.next = temp;
      curr = temp;
    }

    curr = start;

    let origin = start;
    let copy = start.next;
    let copySize = 0;

    temp = copy;

    while (origin != null && copy != null) {
      origin.next = origin.next != null ? origin.next.next : origin.next;
      copy.next = copy.next != null ? copy.next.next : copy.next;
      copySize++;
      origin = origin.next;
      copy = copy.next;
    }
    const newList = new this.prototype.constructor(temp);
    newList.size = copySize;
    return newList;
  }

  getLast() {
    let node = this.head;

    while (node && node.next) {
      node = node.next;
    }

    return node;
  }

  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.data + " ";
      curr = curr.next;
    }
    return str;
  }

  toArray() {
    let curr = this.head;
    let arr = [];
    while (curr) {
      arr.push(curr.data);
      curr = curr.next;
    }
    return arr;
  }

  clear(){
    this.head = null;
    this.size = 0;
  }
}
