const path = require('path');

module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-closing-bracket-location': [
      1,
      {
        nonEmpty: 'after-props',
        selfClosing: 'tag-aligned',
      },
    ],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react-native/no-inline-styles': 0,
    'import/prefer-default-export': 0,
    'arrow-body-style': [1, 'as-needed'],
    'no-console': [1, { allow: ['error'] }],
    'no-unused-vars': 0, // TODO: Remember to enable again
    'no-use-before-define': 0,
    'no-unused-expressions': [
      1,
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    // 'import/no-unresolved': [
    //   2,
    //   {
    //     ignore: ['@screens/'],
    //   },
    // ],
    'eslint-comments/no-unlimited-disable': 0,
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          // ['@components', './src/components/index.js'],
          // ['@screens', './src/screens/index.js'],
          // ['@hooks', './src/hooks'],
          // ['@context', './src/context'],
          // ['@constants', './src/constants.js'],
          // ['@api', './src/api/ApiService.js'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
      [path.resolve('customLintResolver.js')]: {},
    },
  },
};
