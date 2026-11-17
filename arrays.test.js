import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  sumArray, maxInArray, countEvens, reverseArray, indexOfElement,
  getPositiveNumbers, uniqueValues, rotateRight, secondLargest,
  mergeAndSort, wordLengths, isSortedAscending, hasPairWithSum,
  flattenOnce, groupByParity,
} from './arrays.js';

test('1. Sum handles empty arrays and negative values', () => {
  assert.equal(sumArray([1, 2, 3, 4]), 10);
  assert.equal(sumArray([]), 0);
  assert.equal(sumArray([-3, 2]), -1);
});

test('2. Maximum handles empty and all-negative arrays', () => {
  assert.equal(maxInArray([3, 10, 5]), 10);
  assert.equal(maxInArray([-3, -5]), -3);
  assert.equal(maxInArray([]), null);
});

test('3. Count includes zero and negative even integers', () => {
  assert.equal(countEvens([1, 2, 3, 4, 6]), 3);
  assert.equal(countEvens([1, 3, 5]), 0);
  assert.equal(countEvens([-4, -3, 0]), 2);
});

test('4. Reverse returns a new array without modifying its input', () => {
  const input = Object.freeze([1, 2, 3]);
  assert.deepEqual(reverseArray(input), [3, 2, 1]);
  assert.deepEqual(reverseArray(['a', 'b']), ['b', 'a']);
  const empty = [];
  assert.notEqual(reverseArray(empty), empty);
});

test('5. Index lookup returns the first strict match or -1', () => {
  assert.equal(indexOfElement(['a', 'b', 'c', 'b'], 'b'), 1);
  assert.equal(indexOfElement([10, 20, 30], 5), -1);
  assert.equal(indexOfElement([1, '1'], '1'), 1);
});

test('6. Positive filter excludes zero', () => {
  assert.deepEqual(getPositiveNumbers([-3, 0, 2, 5, -1]), [2, 5]);
  assert.deepEqual(getPositiveNumbers([-1, -2]), []);
});

test('7. Unique values keep their first occurrence order', () => {
  assert.deepEqual(uniqueValues([1, 2, 2, 3, 1]), [1, 2, 3]);
  assert.deepEqual(uniqueValues(['a', 'a', 'b']), ['a', 'b']);
});

test('8. Rotation wraps shifts and returns a new array at zero shift', () => {
  const input = Object.freeze([1, 2, 3, 4]);
  assert.deepEqual(rotateRight(input, 1), [4, 1, 2, 3]);
  assert.deepEqual(rotateRight(input, 2), [3, 4, 1, 2]);
  assert.deepEqual(rotateRight(input, 5), [4, 1, 2, 3]);
  assert.deepEqual(rotateRight(input, -1), [2, 3, 4, 1]);
  const copy = rotateRight(input, 0);
  assert.deepEqual(copy, input);
  assert.notEqual(copy, input);
  assert.deepEqual(rotateRight([], 3), []);
});

test('9. Second largest skips repeated maximum values', () => {
  assert.equal(secondLargest([10, 5, 20]), 10);
  assert.equal(secondLargest([3, 3, 3]), null);
  assert.equal(secondLargest([1]), null);
  assert.equal(secondLargest([-7, -3, -3, -5]), -5);
  assert.equal(secondLargest([]), null);
});

test('10. Merge sorts numerically and preserves the inputs', () => {
  assert.deepEqual(mergeAndSort([3, 1], [4, 2]), [1, 2, 3, 4]);
  assert.deepEqual(mergeAndSort([], [5, 1]), [1, 5]);
  assert.deepEqual(mergeAndSort(Object.freeze([10, 2]), Object.freeze([-1, 2])), [-1, 2, 2, 10]);
});

test('11. Word lengths preserve order and include empty strings', () => {
  assert.deepEqual(wordLengths(['apple', 'hi', 'JS']), [5, 2, 2]);
  assert.deepEqual(wordLengths([]), []);
  assert.deepEqual(wordLengths(['']), [0]);
});

test('12. Ascending order permits equal adjacent values', () => {
  assert.equal(isSortedAscending([1, 2, 2, 3]), true);
  assert.equal(isSortedAscending([3, 2, 1]), false);
  assert.equal(isSortedAscending([]), true);
});

test('13. Two-sum requires two distinct indices', () => {
  assert.equal(hasPairWithSum([1, 2, 3, 9], 8), false);
  assert.equal(hasPairWithSum([1, 2, 4, 4], 8), true);
  assert.equal(hasPairWithSum([4], 8), false);
  assert.equal(hasPairWithSum([-5, 2, 5], 0), true);
});

test('14. Flatten removes only the first level of nesting', () => {
  assert.deepEqual(flattenOnce([1, [2, 3], 4]), [1, 2, 3, 4]);
  assert.deepEqual(flattenOnce([[1, 2], [3], 4]), [1, 2, 3, 4]);
  assert.deepEqual(flattenOnce([1, 2, 3]), [1, 2, 3]);
  assert.deepEqual(flattenOnce([[1, [2]], [], 3]), [1, [2], 3]);
});

test('15. Parity groups preserve order and support negative integers', () => {
  assert.deepEqual(groupByParity([1, 2, 3, 4, 5]), {
    even: [2, 4],
    odd: [1, 3, 5],
  });
  assert.deepEqual(groupByParity([-3, 0, -2, 1]), {
    even: [0, -2],
    odd: [-3, 1],
  });
});
