import path from 'path';

export = {
  testEnvironment: 'jest-environment-node',
  transform: {
    '^.+\\.js?(x)': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': path.join(
      __dirname,
      'jest-transform-stub',
    ),
  },
  testMatch: [
    '**/tests/**/*.(spec|test).js?(x)',
    '**/__tests__/**/*.(spec|test).js?(x)',
  ],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // serializer for snapshots
  snapshotSerializers: ['jest-serializer'],
  // coverage
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageReporters: ['text-summary', 'lcov'],
  // watch
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
