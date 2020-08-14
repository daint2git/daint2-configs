import base = require('../src/base');

describe('base', () => {
  it('should equal env', () => {
    expect(base.env).toEqual({
      es2020: true,
      node: true,
    });
  });
});
