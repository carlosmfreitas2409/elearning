import React, { useCallback, useEffect, useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import { useLesson } from '../../hooks/lesson';

import formatDuration from '../../utils/formatDuration';
import formatLesson from '../../utils/formatLesson';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  CourseContainer,
  CourseHeader,
  Title,
  Counter,
  LessonList,
  Lesson,
  LessonPlay,
  LessonContent,
  LessonTitle,
  LessonDetails,
  Details,
  Status,
  LessonNumberText,
  LessonDuration,
  LessonDurationText,
  StatusText,
} from './styles';

interface Course {
  name: string;
  lessons: Array<{
    id: string;
    name: string;
    duration: number;
  }>;
}

interface Params {
  id: string;
}

const CourseDetails: React.FC = () => {
  const [course, setCourse] = useState<Course>();

  const { completedLessons, courseLessons } = useLesson();

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    api.get(`/courses/${routeParams.id}`).then(response => {
      setCourse(response.data);
      courseLessons(response.data);
    });
  }, [routeParams, courseLessons]);

  const handleNavigateFavorites = useCallback(() => {
    navigation.navigate('MainBottom', {
      screen: 'Favorites',
    });
  }, [navigation]);

  const handleNavigate = useCallback(
    (id: string) => {
      navigation.navigate('LessonDetails', { id });
    },
    [navigation],
  );

  const checkLessonCompleted = useCallback(
    (lesson_id: string) => {
      const checkCompleted = completedLessons.find(
        findLesson => findLesson.id === lesson_id,
      );

      return !!checkCompleted;
    },
    [completedLessons],
  );

  return (
    <Container>
      <Header>
        <Icon
          name="arrow-left"
          size={24}
          color="#FF6680"
          onPress={() => navigation.goBack()}
        />
        <Image source={logoImg} />
        <Icon
          name="heart"
          size={24}
          color="#FF6680"
          onPress={handleNavigateFavorites}
        />
      </Header>

      <CourseContainer>
        <CourseHeader>
          <Title>{course?.name}</Title>
          <Counter>
            {course?.lessons.length}
            {course?.lessons.length === 1 ? ' aula' : ' aulas'}
          </Counter>
        </CourseHeader>

        <ScrollView>
          <LessonList>
            {course?.lessons.map((lesson, index) => (
              <Lesson key={lesson.id} onPress={() => handleNavigate(lesson.id)}>
                <LessonPlay
                  isCompleted={checkLessonCompleted(lesson.id) && true}
                >
                  <Icon name="play-circle" size={40} color="#ffffff" />
                </LessonPlay>

                <LessonContent>
                  <LessonTitle>{lesson.name}</LessonTitle>
                  <LessonDetails>
                    <Details>
                      <LessonNumberText>{formatLesson(index)}</LessonNumberText>

                      <LessonDuration>
                        <Icon name="clock" size={12} color="#C4C4D1" />
                        <LessonDurationText>
                          {formatDuration(lesson.duration)}
                        </LessonDurationText>
                      </LessonDuration>
                    </Details>

                    {checkLessonCompleted(lesson.id) && (
                      <Status>
                        <StatusText>Completo!</StatusText>
                      </Status>
                    )}
                  </LessonDetails>
                </LessonContent>
              </Lesson>
            ))}
          </LessonList>
        </ScrollView>
      </CourseContainer>
    </Container>
  );
};

export default CourseDetails;
