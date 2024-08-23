import { calculadora } from './test'

describe('Testando vitest', () => {
  it('should calculate ', () => {
    expect(calculadora(1, 2)).toBe(3)
  })
})
