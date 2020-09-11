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
    'no-unused-vars': 0, // Enable again
    'no-use-before-define': 0,
    'no-unused-expressions': [
      1,
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
  },
  plugins: ['react', 'react-hooks', 'prettier'],
};
