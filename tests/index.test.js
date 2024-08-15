const soma = require('../src/index');

describe('Função soma', () => {
  test('deve retornar "Hello World"', () => {
    expect(soma()).toBe("Hello World");
  });
});
