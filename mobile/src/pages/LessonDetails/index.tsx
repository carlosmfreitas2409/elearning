import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, Linking, View } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import { useLesson } from '../../hooks/lesson';

import formatDuration from '../../utils/formatDuration';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  LessonContainer,
  LessonVideo,
  LessonTitle,
  LessonInfo,
  LessonNumberText,
  LessonDuration,
  LessonDurationText,
  LessonDescription,
  LessonOptions,
  PreviousLessonButton,
  PreviousLessonButtonText,
  NextLessonButton,
  NextLessonButtonText,
  LessonVideoBackground,
} from './styles';
import formatLesson from '../../utils/formatLesson';

interface Lesson {
  id: string;
  name: string;
  description: string;
  duration: number;
  video_id: string;
}

interface Params {
  id: string;
}

const LessonDetails: React.FC = () => {
  const [lesson, setLesson] = useState<Lesson>();

  const { lessons, completeLesson } = useLesson();

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    api.get(`/lessons/${routeParams.id}`).then(response => {
      setLesson(response.data);
    });
  }, [routeParams]);

  const handleNavigateFavorite = useCallback(() => {
    navigation.navigate('MainBottom', {
      screen: 'Favorite',
    });
  }, [navigation]);

  const handleNavigatePrevious = useCallback(() => {
    if (lesson) {
      const lessonIndex = lessons.findIndex(
        findLesson => findLesson.id === lesson.id,
      );

      if (lessonIndex - 1 >= 0) {
        const previousLessonId = lessons[lessonIndex - 1].id;
        navigation.navigate('LessonDetails', {
          id: previousLessonId,
        });
      }
    }
  }, [navigation, lesson, lessons]);

  const handleNavigateNext = useCallback(() => {
    if (lesson) {
      completeLesson(lesson);

      const lessonIndex = lessons.findIndex(
        findLesson => findLesson.id === lesson.id,
      );

      if (lessonIndex + 1 < lessons.length) {
        const nextLessonId = lessons[lessonIndex + 1].id;
        navigation.navigate('LessonDetails', {
          id: nextLessonId,
        });
      }
    }
  }, [navigation, lesson, lessons, completeLesson]);

  const handleYoutubeVideo = useCallback(() => {
    Linking.openURL(`https://www.youtube.com/watch?v=${lesson?.video_id}`);
  }, [lesson]);

  const lessonNumber = useMemo(() => {
    if (lesson) {
      const lessonIndex = lessons.findIndex(
        findLesson => findLesson.id === lesson.id,
      );

      return formatLesson(lessonIndex);
    }

    return 'Aula 00';
  }, [lesson, lessons]);

  const youtubeImage = useMemo(() => {
    return `http://img.youtube.com/vi/${lesson?.video_id}/0.jpg`;
  }, [lesson]);

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
          onPress={handleNavigateFavorite}
        />
      </Header>

      <LessonVideo onPress={handleYoutubeVideo}>
        <LessonVideoBackground
          source={{
            uri: youtubeImage,
          }}
        />
        <Icon
          name="play-circle"
          size={64}
          color="#ffffff"
          style={{ zIndex: 1 }}
        />
      </LessonVideo>

      <LessonContainer>
        <View>
          <LessonTitle>{lesson?.name}</LessonTitle>

          <LessonInfo>
            <LessonNumberText>{lessonNumber}</LessonNumberText>
            <LessonDuration>
              <Icon name="clock" size={16} color="#A0A0B2" />
              <LessonDurationText>
                {formatDuration(lesson?.duration)}
              </LessonDurationText>
            </LessonDuration>
          </LessonInfo>

          <LessonDescription>{lesson?.description}</LessonDescription>
        </View>

        <LessonOptions>
          <PreviousLessonButton onPress={handleNavigatePrevious}>
            <Icon name="arrow-left" size={20} color="#FF6680" />
            <PreviousLessonButtonText>Aula anterior</PreviousLessonButtonText>
          </PreviousLessonButton>

          <NextLessonButton onPress={handleNavigateNext}>
            <NextLessonButtonText>Próxima aula</NextLessonButtonText>
            <Icon name="arrow-right" size={20} color="#ffffff" />
          </NextLessonButton>
        </LessonOptions>
      </LessonContainer>
    </Container>
  );
};

export default LessonDetails;
