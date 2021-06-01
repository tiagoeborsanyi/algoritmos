import Deque from './Deque'

describe('Testes para Deque', () => {

  test('func addBack()', () => {
    const deque = new Deque()
    const res = deque.addBack('joao')
    console.log(res)
    expect(deque.addBack('joao')).toEqual({0: 'joao'})
  })

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

  test('func toString() vazio', () => {
    const deque = new Deque()
    expect(deque.toString()).toEqual('')
  })
});
