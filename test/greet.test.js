'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('../src/greet');

test('greets by name', () => {
  assert.strictEqual(greet('Ada'), 'Hello, Ada!');
});

test('falls back to world', () => {
  assert.strictEqual(greet(''), 'Hello, world!');
  assert.strictEqual(greet(), 'Hello, world!');
});

test('trims surrounding whitespace', () => {
  assert.strictEqual(greet('  Ada  '), 'Hello, Ada!');
});
