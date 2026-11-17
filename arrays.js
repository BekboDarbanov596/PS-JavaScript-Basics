// 1. Sum of array elements
export function sumArray(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

// 2. Maximum value
export function maxInArray(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let largest = numbers[0];
  for (const number of numbers) {
    largest = Math.max(largest, number);
  }
  return largest;
}

// 3. Count even numbers
export function countEvens(numbers) {
  let count = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      count++;
    }
  }
  return count;
}

// 4. Reverse an array into a new array
export function reverseArray(arr) {
  const reversed = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    reversed.push(arr[index]);
  }
  return reversed;
}

// 5. Find the first matching index
export function indexOfElement(arr, value) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === value) {
      return index;
    }
  }
  return -1;
}

// 6. Filter positive numbers
export function getPositiveNumbers(numbers) {
  return numbers.filter(number => number > 0);
}

// 7. Keep the first occurrence of each value
export function uniqueValues(arr) {
  return [...new Set(arr)];
}

// 8. Rotate an array to the right
export function rotateRight(arr, k) {
  if (arr.length === 0) {
    return [];
  }

  const shift = ((k % arr.length) + arr.length) % arr.length;
  const split = arr.length - shift;
  return [...arr.slice(split), ...arr.slice(0, split)];
}

// 9. Find the second largest distinct value in one pass
export function secondLargest(numbers) {
  let largest = null;
  let second = null;

  for (const number of numbers) {
    if (largest === null || number > largest) {
      second = largest;
      largest = number;
    } else if (number < largest && (second === null || number > second)) {
      second = number;
    }
  }
  return second;
}

// 10. Merge and sort in ascending numeric order
export function mergeAndSort(a, b) {
  return [...a, ...b].sort((left, right) => left - right);
}

// 11. Return each word's length
export function wordLengths(words) {
  return words.map(word => word.length);
}

// 12. Check that adjacent values never decrease
export function isSortedAscending(numbers) {
  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] < numbers[index - 1]) {
      return false;
    }
  }
  return true;
}

// 13. Check for a pair at different indices in O(n) time
export function hasPairWithSum(numbers, target) {
  const seen = new Set();
  for (const number of numbers) {
    if (seen.has(target - number)) {
      return true;
    }
    seen.add(number);
  }
  return false;
}

// 14. Flatten exactly one level
export function flattenOnce(arr) {
  const result = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (const item of element) {
        result.push(item);
      }
    } else {
      result.push(element);
    }
  }
  return result;
}

// 15. Group integers by parity, preserving their order
export function groupByParity(numbers) {
  const groups = { even: [], odd: [] };
  for (const number of numbers) {
    if (number % 2 === 0) {
      groups.even.push(number);
    } else {
      groups.odd.push(number);
    }
  }
  return groups;
}
