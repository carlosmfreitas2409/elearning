import React, { useCallback, useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import SearchInput from '../../components/SearchInput';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  HeaderContainer,
  CourseContainer,
  CourseHeader,
  Title,
  Counter,
  CourseList,
  Course,
  CourseTitle,
  CourseCounter,
  CourseImage,
} from './styles';

interface Course {
  id: string;
  name: string;
  image_url: string;
  lessons: Array<{
    name: string;
  }>;
}

const Dashboard: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [courses, setCourses] = useState<Course[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    api.get('/courses').then(response => {
      setCourses(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get('/courses', {
        params: {
          name_like: searchValue,
        },
      })
      .then(response => {
        setCourses(response.data);
      });
  }, [searchValue]);

  const handleNavigate = useCallback(
    (id: string) => {
      navigation.navigate('CourseDetails', { id });
    },
    [navigation],
  );

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
          placeholder="Busque um curso"
        />
      </Header>

      <CourseContainer>
        <CourseHeader>
          <Title>Categorias</Title>
          <Counter>
            {courses.length}
            {courses.length === 1 ? ' curso' : ' cursos'}
          </Counter>
        </CourseHeader>

        <CourseList
          data={courses}
          keyExtractor={item => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{ height: 40 }}
          renderItem={({ item }) => (
            <Course onPress={() => handleNavigate(item.id)}>
              <CourseImage source={{ uri: item.image_url }} />
              <CourseTitle>{item.name}</CourseTitle>
              <CourseCounter>
                {item.lessons.length}
                {item.lessons.length === 1 ? ' aula' : ' aulas'}
              </CourseCounter>
            </Course>
          )}
        />
      </CourseContainer>
    </Container>
  );
};

export default Dashboard;
