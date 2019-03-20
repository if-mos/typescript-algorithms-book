import { LinkedList } from '../src/LinkedList'

describe('#Linked List', () => {
  let linkedList: LinkedList<number>

  const toAppend = [10, 15, 3333, 222, 20]


  beforeEach(() => {
    linkedList = new LinkedList()

    toAppend.forEach(v => {
      linkedList.append(v)
    })
  })

  it('should get right head', () => {
    expect(linkedList.getHead()).toHaveProperty('element')
    expect(new LinkedList().getHead()).toBeNull()
  })

  it('should append success', () => {
    expect(linkedList.size()).toEqual(toAppend.length)
  })

  it('should get right index', () => {
    expect(linkedList.indexOf(-1)).toEqual(-1)
    expect(linkedList.indexOf(15)).toEqual(1)
    expect(linkedList.indexOf(20)).toEqual(4)
    expect(new LinkedList().indexOf(-1)).toBe(-1)
  })

  it('should insert success', () => {
    expect(linkedList.insert(-1, 66666)).toBe(false)
    expect(linkedList.insert(toAppend.length + 1, 66666)).toBe(false)
    expect(linkedList.insert(toAppend.length, 66666)).toBe(true)
    expect(linkedList.size()).toEqual(toAppend.length + 1)
    expect(linkedList.indexOf(66666)).toEqual(toAppend.length)
    expect(linkedList.insert(0, 77777)).toBe(true)
    expect(linkedList.insert(1, 99999)).toBe(true)
    expect(linkedList.indexOf(99999)).toEqual(1)
  })

  it('should remove success at given position', () => {
    expect(new LinkedList().removeAt(-1)).toBeNull()
    expect(linkedList.removeAt(-1)).toBeNull()
    expect(linkedList.removeAt(0)).toEqual(10)
    expect(linkedList.size()).toEqual(toAppend.length - 1)
    expect(linkedList.removeAt(1)).toEqual(3333)
    expect(linkedList.size()).toEqual(toAppend.length - 2)


  })

  it('should remove success and get right size', () => {
    expect(new LinkedList().remove(-1)).toBe(false)
    expect(linkedList.remove(-1)).toBe(false)
    expect(linkedList.remove(20)).toBe(true)
    expect(linkedList.size()).toEqual(toAppend.length - 1)
    linkedList.remove(10)
    expect(linkedList.size()).toEqual(toAppend.length - 2)
    expect(linkedList.isEmpty()).toBe(false)
  })
})
