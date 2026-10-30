'use strict';

function greet(name) {
  const who = typeof name === 'string' && name.trim() ? name.trim() : 'world';
  return `Hello, ${who}!`;
}

module.exports = { greet };
