import Listas from './listas'

test('is class', () => {
  const lista = new Listas()
  expect(lista).toBeDefined()
});

test('function push', () => {
  const lista = new Listas()
  lista.push(10)
  lista.push(10)
  expect(2).toEqual(lista.count)
});

test('func size', () => {
  const lista = new Listas()
  lista.push(10)
  expect(lista.size()).toEqual(1)
});

test('func isEmpty maior than zero', () => {
  const lista = new Listas()
  lista.push(10)
  expect(lista.isEmpty()).toBeFalsy()
});

test('func isEmpty equal zero', () => {
  const lista = new Listas()
  expect(lista.isEmpty()).toBeTruthy()
  expect(lista.isEmpty()).not.toBeNull()
});

test('func removeAt', () => {
  const lista = new Listas()
  const remove = lista.removeAt(5)
  expect(remove).toBeFalsy()
  // expect(remove).toBeNull()
});