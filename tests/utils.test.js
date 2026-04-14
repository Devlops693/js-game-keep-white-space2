const { GameStatus } = require('../main.js');

// Mock pour le context (pas besoin d'un vrai canvas pour ce test)
const mockCtx = {
  clearRect: () => {},
  fillStyle: '',
  lineWidth: 0,
  strokeStyle: '',
  font: '',
  textBaseline: '',
  textAlign: '',
  fillText: () => {},
  strokeText: () => {},
  beginPath: () => {},
  arc: () => {},
  stroke: () => {},
  fill: () => {},
  moveTo: () => {},
  lineTo: () => {},
  closePath: () => {},
  getImageData: () => ({ data: new Array(4).fill(255) }),
  putImageData: () => {},
  shadowColor: '',
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowBlur: 0,
};

describe('GameStatus - getTimeStr', () => {
  let gameStatus;

  beforeAll(() => {
    gameStatus = new GameStatus(mockCtx);
  });

  test('getTimeStr(424242) returns correct format', () => {
    const result = gameStatus.getTimeStr(424242);
    expect(result).toMatch(/^\d+:\d{2}\.\d{2}$/);
  });

  test('getTimeStr(0) returns "0:00.00"', () => {
    const result = gameStatus.getTimeStr(0);
    expect(result).toBe('0:00.00');
  });

  test('getTimeStr(1000) returns "0:01.00"', () => {
    const result = gameStatus.getTimeStr(1000);
    expect(result).toBe('0:01.00');
  });

  test('getTimeStr(60000) returns "1:00.00"', () => {
    const result = gameStatus.getTimeStr(60000);
    expect(result).toBe('1:00.00');
  });

  test('getTimeStr retourne toujours une chaîne', () => {
    const result = gameStatus.getTimeStr(12345);
    expect(typeof result).toBe('string');
  });
});
