const { subtract } = require('../src/utils/math');

test('subtracts 1 - 2 to equal -1', () => {
    expect(subtract(1, 2)).toBe(-1);
});


test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
});