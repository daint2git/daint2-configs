import base = require('../src/base');

describe('base', () => {
  it('should equal env', () => {
    expect(base.env).toEqual({
      es2017: true,
      node: true,
    });
  });
});
