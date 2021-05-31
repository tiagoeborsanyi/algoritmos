import Deque from './Deque'

describe('Testes para Deque', () => {
  // const deque = new Deque()
  // console.log('deque1: ', deque)

  test('func isEmpty() true', () => {
    const deque = new Deque()
    const r = deque.isEmpty()
    expect(r).toBeTruthy()
  })

  test('func isEmpty() false', () => {
    const deque = new Deque(2, 1, {})
    const r = deque.isEmpty()
    expect(r).toBeFalsy()
  })

  test('func size()', () => {
    const deque = new Deque(2, 3, {})
    expect(deque.size()).toEqual(-1)
  })
});
