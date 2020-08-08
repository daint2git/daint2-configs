module.exports = {
  root: true,
  // extends: ['@daint2-configs/eslint-config'],
  extends: [require.resolve('./packages/eslint-config/dist')],
  parserOptions: {
    sourceType: 'module',
    project: ['./packages/*/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
};
