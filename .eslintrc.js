module.exports = {
  root: true,
  extends: [
    './packages/eslint-config/base',
    './packages/eslint-config/jest',
    './packages/eslint-config/typescript',
  ],
  parserOptions: {
    project: ['./tsconfig.json', './packages/*/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
};
