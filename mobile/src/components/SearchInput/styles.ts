import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 56px;
  padding: 0px 24px;
  background: #ffffff;

  border-radius: 100px;
  border-width: 2px;
  border-color: #ffffff;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff6680;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #6c6c80;
  font-size: 15px;
  font-family: 'Roboto-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
