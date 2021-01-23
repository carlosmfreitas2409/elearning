import React, { useState } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import SearchInput from '../../components/SearchInput';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  HeaderContainer,
  CourseContainer,
  Title,
} from './styles';

const Favorites: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderContainer>
          <Image source={logoImg} />
          <Icon
            name="power"
            size={24}
            color="#FF6680"
            onPress={() => navigation.navigate('Home')}
          />
        </HeaderContainer>

        <SearchInput
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Busque uma aula"
        />
      </Header>

      <CourseContainer>
        <Title>Cursos salvos</Title>
      </CourseContainer>
    </Container>
  );
};

export default Favorites;
