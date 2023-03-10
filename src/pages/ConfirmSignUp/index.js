import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import * as S from './styles';

const ConfirmSignUpScreen = ({navigation, route}) => {
  const formContent = route.params?.formContent;
  return (
    <S.Container>
      <S.WrapperText>
        <S.Text>
          Your Name Is: <S.Text isContent>{formContent?.name}</S.Text>
        </S.Text>

        <S.Text>
          Your Last Name Is: <S.Text isContent>{formContent?.lastName}</S.Text>
        </S.Text>

        <S.Text>
          Your Birth Day Is: <S.Text isContent>{formContent?.birthDay}</S.Text>
        </S.Text>
      </S.WrapperText>
      <Button
        title="go to Home"
        onPress={() => navigation.navigate('WelcomeScreen')}
      />
    </S.Container>
  );
};

export {ConfirmSignUpScreen};
