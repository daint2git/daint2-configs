import jestPreset = require('../../src/typescript/jest-preset');

describe('typescript/jest-preset', () => {
  it('should include ts and tsx in moduleFileExtensions', () => {
    expect(jestPreset.moduleFileExtensions).toContain('ts');
    expect(jestPreset.moduleFileExtensions).toContain('tsx');
  });
});
