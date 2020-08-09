import deepmerge from 'deepmerge';
import defaultTsPreset = require('../typescript/jest-preset');

export = deepmerge(defaultTsPreset, {
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
});
