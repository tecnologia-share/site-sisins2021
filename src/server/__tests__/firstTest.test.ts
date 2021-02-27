import Soma from '../soma';

describe('Test soma', () => {
  it('Deve pegar env test', () => {
    expect(process.env.TEST).toBe('test');
  });

  it('Deve subtrair dois valores', () => {
    const resultado = Soma(2, -1);

    expect(resultado).toBe(1);
  });
});
