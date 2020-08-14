export = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:import/recommended',
    './prettier',
  ],
  env: {
    es2020: true,
    node: true,
  },
  ignorePatterns: ['node_modules', 'build', 'dist', 'lib', 'coverage'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
  },
};
