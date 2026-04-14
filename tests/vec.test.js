const { Vec } = require('../main.js');

describe('Vec Class - Tests fournis', () => {
  test('new Vec(1, 2) returns {x: 1, y: 2}', () => {
    const v = new Vec(1, 2);
    expect(v.x).toBe(1);
    expect(v.y).toBe(2);
  });

  test('new Vec(1, 2).add(new Vec(3, 4)) returns {x: 4, y: 6}', () => {
    const result = new Vec(1, 2).add(new Vec(3, 4));
    expect(result.x).toBe(4);
    expect(result.y).toBe(6);
  });

  test('new Vec(1, 2).mul(-2, 3) returns {x: -2, y: 6}', () => {
    const result = new Vec(1, 2).mul(-2, 3);
    expect(result.x).toBe(-2);
    expect(result.y).toBe(6);
  });

  test('new Vec(1, 2).dot(new Vec(2, 1)) returns 4', () => {
    const result = new Vec(1, 2).dot(new Vec(2, 1));
    expect(result).toBe(4);
  });

  test('new Vec(1, 2).cross(new Vec(3, 4).mul(-2,3)) returns 24', () => {
    const result = new Vec(1, 2).cross(new Vec(3, 4).mul(-2, 3));
    expect(result).toBe(24);
  });

  test('new Vec(1, 2).add(3) returns {x: NaN, y: NaN}', () => {
    const result = new Vec(1, 2).add(3);
    expect(Number.isNaN(result.x)).toBe(true);
    expect(Number.isNaN(result.y)).toBe(true);
  });

  test('new Vec(1, 1).cross(new Vec(-42, -42)) returns 0', () => {
    const result = new Vec(1, 1).cross(new Vec(-42, -42));
    expect(result).toBe(0);
  });

  // +5 tests persos
  test('Vec(0, 0) crée un vecteur nul', () => {
    const v = new Vec(0, 0);
    expect(v.x).toBe(0);
    expect(v.y).toBe(0);
  });

  test('add avec vecteur négatif', () => {
    const result = new Vec(5, 5).add(new Vec(-3, -2));
    expect(result.x).toBe(2);
    expect(result.y).toBe(3);
  });

  test('mul avec zéro', () => {
    const result = new Vec(10, 20).mul(0, 0);
    expect(result.x).toBe(0);
    expect(result.y).toBe(0);
  });

  test('dot avec vecteur nul', () => {
    const result = new Vec(5, 10).dot(new Vec(0, 0));
    expect(result).toBe(0);
  });

  test('cross avec soi-même donne 0', () => {
    const result = new Vec(7, 3).cross(new Vec(7, 3));
    expect(result).toBe(0);
  });
});
