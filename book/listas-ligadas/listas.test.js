import Listas from './listas'

test('is class', () => {
  const lista = new Listas()
  expect(lista).toBeDefined()
});