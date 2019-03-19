class LinkedListNode<T> {
  constructor(public element: T, public next: LinkedListNode<T> | null = null) {}
}

export interface ILinkedList<T> {
  insert(position: number, element: T): void

  remove(element: T): boolean

  indexOf(element: T): number

  isEmpty(): boolean

  size(): number

  getHead(): LinkedListNode<T> | null

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
      while (current.next !== null && index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length--

    return current.element
  }
}
