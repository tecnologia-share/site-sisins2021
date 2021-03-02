import Soma from '../soma';

describe('Test soma', () => {
  it('Deve somar dois valores', () => {
    const resultado = Soma(2, 2);

    expect(resultado).toBe(4);
  });
});
