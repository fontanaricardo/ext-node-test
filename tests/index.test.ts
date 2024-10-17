import { ext } from '../src/index';

describe('numeroPorExtenso', () => {
    test('deve retornar o número por extenso corretamente', () => {
        expect(ext(0)).toBe('zero');
    });
});

describe('numeroPorExtenso', () => {
    test('deve retornar null se fora do escopo', () => {
        expect(ext(10)).toBe("");
        expect(ext(-1)).toBe("");
    });
});