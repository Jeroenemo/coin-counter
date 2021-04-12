const { coinCounter, counter } = require('./../src/counter.js');


test('should return [] if amount is 0', () => {
  expect(counter(0, [25, 10, 5, 1])).toEqual([]);
});

test('should return [1] if amount is 1', () => {
  expect(counter(1, [25, 10, 5, 1])).toEqual([1]);
});

test('should return [5] if amount is 5', () => {
  expect(counter(5, [25, 10, 5, 1])).toEqual([5]);
});

test('should return [10] if amount is 10', () => {
  expect(counter(10, [25, 10, 5, 1])).toEqual([10]);
})

test('should return array of coins for dollar input', () => {
  expect(coinCounter(.96, [25, 10, 5, 1])).toEqual([25, 25, 25, 10, 10, 1])
})