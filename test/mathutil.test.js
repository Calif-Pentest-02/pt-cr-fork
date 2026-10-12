import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sum } from '../src/mathutil.js';

test('sum adds numbers', () => {
  assert.equal(sum([1, 2, 3]), 6);
});
