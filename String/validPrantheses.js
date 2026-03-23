const isValid = (s) => {
  let stack = [];

  for (let char of s) {
    if (char === "(") stack.push(")");
    else if (char === "{") stack.push("}");
    else if (char === "[") stack.push("]");
    // If it's a closing bracket, it MUST match the last one we pushed
    else if (stack.pop() !== char) return false;
  }

  return stack.length === 0;
};

console.log(isValid("([])")); 
console.log(isValid("[([]()){}]")); 
