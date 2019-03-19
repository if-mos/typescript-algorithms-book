import { Stack } from '../Stack'

export function baseConverter(decNumber: number, base: number) {
  const remStack = new Stack<number>()
  let rem: number
  let baseString = ''
  const digits = '0123456789ABCDEF'

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem)

    decNumber = Math.floor(decNumber / base)
  }

  while (!remStack.isEmpty()) {
    const index = remStack.pop()
    baseString += index !== undefined ? digits[index] : ''
  }

  return baseString
}
