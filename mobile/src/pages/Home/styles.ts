import styled from 'styled-components/native';

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  padding: 40px 40px 0;
  justify-content: flex-end;
`;

export const Container = styled.View`
  margin-top: 60px;
`;

export const Title = styled.Text`
  color: #ff6680;
  font-size: 36px;
  font-family: 'Rubik-Regular';
  margin-top: 90px;
`;

export const Description = styled.Text`
  color: #edebf5;
  font-size: 15px;
  font-family: 'Roboto-Regular';
  margin-top: 16px;
  margin-bottom: 40px;
`;

export const NavigationButton = styled.TouchableOpacity`
  background: #ff6680;
  border-radius: 100px;
  padding: 19px;

  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto-Medium';
`;
