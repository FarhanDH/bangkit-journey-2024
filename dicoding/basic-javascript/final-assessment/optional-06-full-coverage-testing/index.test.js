import { describe, it, test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('Calculator', () => {
  it('should sum correctly', () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
  });

  it('should return 0 when parameter is not number', () => {
    // Arrange
    const a = '1';
    const b = 2;
    // Action
    const actualValue = sum(a, b);
    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  it('should return 0 when parameter is less than 0', () => {
    // Arrange
    const a = -3;
    const b = -1000;

    // Action
    const actualValue = sum(a, b);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });
});
