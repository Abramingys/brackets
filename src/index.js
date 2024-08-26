module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsMap = {};

  bracketsConfig.forEach((pair) => {
    bracketsMap[pair[1]] = pair[0];
  });

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];

    let openBracket = bracketsMap[currentChar];
    let isSameBracketPair = openBracket === currentChar;

    if (
      openBracket &&
      (!isSameBracketPair || stack[stack.length - 1] === openBracket)
    ) {
      if (stack.length === 0 || stack.pop() !== openBracket) {
        return false;
      }
    } else {
      stack.push(currentChar);
    }
  }

  return stack.length === 0;
};
