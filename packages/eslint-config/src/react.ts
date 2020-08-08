export = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/recommended'],
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
