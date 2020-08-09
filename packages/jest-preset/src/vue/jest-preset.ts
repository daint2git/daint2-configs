import deepmerge from 'deepmerge';
import defaultPreset = require('../default/jest-preset');

export = deepmerge(defaultPreset, {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  moduleFileExtensions: ['vue'],
  snapshotSerializers: ['jest-serializer-vue'],
});
