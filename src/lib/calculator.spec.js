const { sum } = require('./calculator');

it('should sum 2 and 2 and result 4', () => {
  expect(sum(2, 2)).toBe(4);
});

it('should sum 2 and 2 as a string and result 4', () => {
  expect(sum('2', '2')).toBe(4);
});

it('should throw an error', () => {
  expect(() => {
    sum('a', '2');
  }).toThrowError();
});
