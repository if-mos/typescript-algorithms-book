class LinkedListNode<T> {
  public next: LinkedListNode<T> | null = null

  constructor(public element: T) {
  }
}

export interface ILinkedList<T> {
  toString(): string
}

export class LinkedList<T> {
  static Node = LinkedListNode

  private head: LinkedListNode<T> | null = null

  private length: number = 0

  append(element: T) {
    const node = new LinkedListNode(element)
    let current: LinkedListNode<T>

    if (this.head === null) {
      this.head = node
    } else {
      current = this.head

      while (current.next) {
        current = current.next
      }
      current.next = node
    }

    this.length++
  }

  removeAt(position: number) {
    if (this.head === null || position < 0 || position > this.length) {
      return null
    }

    let current = this.head
    let previous: LinkedListNode<T> = current
    let index = 0

    if (current.next === null || position === 0) {
      this.head = current.next
    } else {
      while (current.next && index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length--

    return current.element
  }

  remove(element: T): boolean {
    if (this.head === null) {
      return false
    }

    let current: LinkedListNode<T> | null = this.head

    let previous = null

    while (current) {
      if (current.element === element) {
        if (previous === null) {
          this.head = current
        } else {
          previous.next = current.next
        }
        this.length--
        return true

      }
      previous = current
      current = current.next
    }

    return false
  }

  insert(position: number, element: T): boolean {

    if (position < 0 || position > this.length || this.head === null) {
      return false
    } else {
      const node = new LinkedListNode(element)
      if (position === 0) {
        node.next = this.head
        this.head = node
        this.length++
        return true
      } else {
        let index = 0
        let current: LinkedListNode<T> | null = this.head
        let previous = current
        while (index++ < position && current) {

          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
        this.length++
        return true
      }
    }
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  size(): number {
    return this.length
  }


  getHead(): LinkedListNode<T> | null {
    return this.head
  }

  indexOf(element: T): number {
    let position: number = -1

    if (this.head === null) {
      return position
    }
    let current: LinkedListNode<T> | null = this.head

    while (current) {
      position++
      if (current.element === element) {
        return position
      }

      current = current.next
    }

    return -1
  }
}
