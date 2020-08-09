import jestPreset = require('../../src/default/jest-preset');

describe('default/jest-preset', () => {
  it('should equal testEnvironment', () => {
    expect(jestPreset.testEnvironment).toBe('jest-environment-node');
  });
});
