'use strict';

/**
 * Return a friendly greeting. Blank or missing names greet the world.
 * @param {string} [name]
 * @returns {string}
 */
function greet(name) {
  const who = typeof name === 'string' && name.trim() ? name.trim() : 'world';
  return `Hello, ${who}!`;
}

module.exports = { greet };
