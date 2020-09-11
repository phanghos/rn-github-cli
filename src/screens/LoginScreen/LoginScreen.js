import React, { useEffect } from 'react';
import WebView from 'react-native-webview';
import { apiService } from '../../api/ApiService';
import { clientId } from '../../config';

export const LoginScreen = () => {
  const state = '12345';

  useEffect(() => {
    apiService
      .user('phanghos')
      .then(({ data }) => {
        // console.log('Response', JSON.stringify(data));
      })
      .catch(err => console.error('Error', err));
  }, []);

  return null;

  // return (
  //   <WebView
  //     source={{
  //       uri: `https://github.com/login/oauth/authorize?client_id=${clientId}&state=${state}`,
  //     }}
  //     onNavigationStateChange={e => {
  //       const { url } = e;
  //       if (url.includes('code')) {
  //         const code = url.split('?')[1].split('&')[0].split('=')[1];
  //         apiService
  //           .requestAccessToken(code, state)
  //           .then(({ data }) => {
  //             console.log('Response', JSON.stringify(data));
  //           })
  //           .catch(err => console.log('Error', err));
  //       }
  //     }}
  //   />
  // );
};
