import deepmerge from 'deepmerge';
import defaultPreset = require('../default/jest-preset');

export = deepmerge(defaultPreset, {
  testEnvironment: 'jest-environment-jsdom',
});
