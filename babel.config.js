module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.json'],
        root: ['./src'],
        alias: {
          '^@screens/(.*)/components/([A-Z].*)':
            './src/screens/\\1/components/\\2',
          '^@screens/(.*)/hooks/(.*)': './src/screens/\\1/hooks/\\2',
          '@components': './src/components',
          '@screens': './src/screens',
          '@hooks': './src/hooks',
          '@context': './src/context',
          '@constants': './src/constants.js',
          '@api': './src/api/ApiService.js',
        },
      },
    ],
  ],
};
