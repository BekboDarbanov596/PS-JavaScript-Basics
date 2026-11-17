# PS: JavaScript Basics

Week 5 problem set for Web Programming 1. The repository covers all 24 Beginner
exercises, the bonus, and all 15 Array Problems.

## Run locally

Use Node.js 20 or newer. The project has no external dependencies.

```sh
npm start
npm test
```

- `beginner.js` prints the results for the numbered Beginner exercises.
- `scope.js` demonstrates the intentional error in exercise 18.
- `arrays.js` exports the 15 functions named in the Array Problems.
- `arrays.test.js` checks the assignment examples and edge cases.

## Exercise 18 — function scope

Run `node scope.js`. The first log succeeds inside `showLocalMessage`.
The second log throws `ReferenceError: localMessage is not defined` because
the variable was declared inside the function and is unavailable in the outer
scope. Node exits with a nonzero status as expected.

## Array Problems

The reverse, index lookup, and one-level flatten solutions use loops.
The two-sum solution checks for a previously seen complement before adding the
current number to a `Set`, so it uses distinct indices and runs in O(n) time
with O(n) extra space.
