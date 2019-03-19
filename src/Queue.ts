export class Queue<T> {
  private items: T[] = []

  enqueue(element: T) {
    this.items.push(element)
  }

  dequeue() {
    return this.items.shift()
  }

  front() {
    return this.items[0]
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }

  size(): number {
    return this.items.length
  }
}

class PriorityQueueElement<V = any> {
  constructor(public element: V, public priority: number) {}
}

export class PriorityQueue<T = number> {
  static QueueElement: PriorityQueueElement

  private items: Array<PriorityQueueElement<T>> = []

  enqueue(element: T, priority: number) {
    const queueElement = new PriorityQueueElement(element, priority)

    let added = false

    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement)
        added = true
        break
      }
    }
    if (!added) {
      this.items.push(queueElement)
    }
  }

  dequeue() {
    return this.items.shift()
  }

  front() {
    return this.items[0]
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }

  size(): number {
    return this.items.length
  }
}
