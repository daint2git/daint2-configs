module.exports = {
  root: true,
  // extends: ['@daint2-configs/eslint-config'],
  extends: [
    './packages/eslint-config/dist/base',
    './packages/eslint-config/dist/jest',
    './packages/eslint-config/dist/typescript',
  ],
  parserOptions: {
    project: ['tsconfig.json', './packages/*/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
};
