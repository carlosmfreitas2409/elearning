import React, { useCallback } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backgroundImg from '../../assets/home-background.png';
import vectorImg from '../../assets/home-vector.png';

import {
  BackgroundImage,
  Container,
  Title,
  Description,
  NavigationButton,
  ButtonText,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigate = useCallback(() => {
    navigation.navigate('MainBottom', {
      screen: 'Dashboard',
    });
  }, [navigation]);

  return (
    <BackgroundImage
      source={backgroundImg}
      imageStyle={{
        width: 437,
        height: 590,
        resizeMode: 'contain',
      }}
    >
      <Container>
        <Image source={vectorImg} />

        <Title>Aprenda da melhor forma</Title>
        <Description>
          Entre na plataforma e acesse cursos de diversas áreas de conhecimento
        </Description>
      </Container>

      <NavigationButton onPress={handleNavigate}>
        <ButtonText>Começar os estudos</ButtonText>
      </NavigationButton>
    </BackgroundImage>
  );
};

export default Home;
