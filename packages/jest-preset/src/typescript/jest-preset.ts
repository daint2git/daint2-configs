import deepmerge from 'deepmerge';
import defaultPreset = require('../default/jest-preset');

export = deepmerge(
  {
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: [
      '**/tests/**/*.(spec|test).ts?(x)',
      '**/__tests__/**/*.(spec|test).ts?(x)',
    ],
    moduleFileExtensions: ['ts', 'tsx'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  },
  defaultPreset,
);
