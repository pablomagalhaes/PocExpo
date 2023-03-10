import styled, {css} from 'styled-components/native';
import {fontSize, Layout} from '../../helpers/Layout';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const WrapperText = styled.View``;

export const Text = styled.Text`
  font-size: ${fontSize(18)};
  margin-bottom: ${Layout.Height(2)};
  ${({isContent}) =>
    isContent &&
    css`
      font-size: ${fontSize(12)};
      font-weight: 700;
    `}
`;
