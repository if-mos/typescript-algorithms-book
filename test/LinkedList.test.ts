import { LinkedList } from '../src/LinkedList'

describe('#Linked List', () => {
  it('should append success', () => {
    const linkedList = new LinkedList()

    const toAppend = [10, 15, 20]

    toAppend.forEach(v => {
      linkedList.append(v)
    })

    expect(linkedList.size()).toEqual(toAppend.length)
  })
})
