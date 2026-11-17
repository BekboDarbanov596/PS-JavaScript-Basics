// Exercise 18: localMessage is in showLocalMessage's function scope.
function showLocalMessage() {
  const localMessage = 'I am local to this function.';
  console.log(localMessage);
}

showLocalMessage();

// The outer scope cannot resolve this name, so Node.js throws ReferenceError.
console.log(localMessage);
