import React, { useEffect } from 'react';
import WebView from 'react-native-webview';
import { apiService } from '../../api/ApiService';

export const LoginScreen = () => {
  const state = 12345;

  const response =
    'access_token=6e4e7d11b3eb16e9d289e3420b287b6da6fe2dc2&scope=&token_type=bearer';

  const token = '6e4e7d11b3eb16e9d289e3420b287b6da6fe2dc2'; //response.split('&')[0].split('=')[1];
  console.log('Token', token);

  useEffect(() => {
    apiService
      .user('phanghos')
      .then(({ data }) => console.log('Response', JSON.stringify(data)))
      .catch(err => console.log('Error', err));
  }, []);

  return null;

  return (
    <WebView
      source={{
        uri: `https://github.com/login/oauth/authorize?client_id=1636907eaa1bdd669203&state=${state}`,
      }}
      onNavigationStateChange={e => {
        const { url } = e;
        if (url.includes('code')) {
          const code = url.split('?')[1].split('&')[0].split('=')[1];
          apiService
            .requestAccessToken(code, state)
            .then(({ data }) => {
              console.log('Response', JSON.stringify(data));
            })
            .catch(err => console.log('Error', err));
        }
      }}
    />
  );
};
