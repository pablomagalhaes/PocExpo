import React, {useRef, useState} from 'react';
import {Alert, Button, View, ActivityIndicator} from 'react-native';
import WebView from 'react-native-webview';
import * as S from './styles';
const SignUpScreen = ({navigation}) => {
  const webviewRef = useRef(null);
  const [language, setLanguage] = useState('');

  //receive info from web
  function onMessageFromWebView(data) {
    const formContent = JSON.parse(data?.nativeEvent?.data);
    navigation.navigate('ConfirmSignUpScreen', {formContent});
  }
  return (
    <WebView
      source={{
        uri: 'https://poc-polaris.herokuapp.com/signup',
      }}
      ref={webviewRef}
      startInLoadingState
      renderLoading={() => (
        <View style={{ flex: 1, alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      )}
      cacheEnabled={false}
      onMessage={onMessageFromWebView}
    />
  );
};

export {SignUpScreen};
