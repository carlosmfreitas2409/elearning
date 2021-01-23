import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 25px;
`;

export const LessonVideo = styled.TouchableOpacity`
  background: #3d3d4c;
  height: 210px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  align-items: center;
  justify-content: center;
`;

export const LessonVideoBackground = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const LessonContainer = styled.View`
  flex: 1;
  background: #f0edf5;
  padding: 24px 25px;
  justify-content: space-between;
`;

export const LessonTitle = styled.Text`
  color: #3d3d4c;
  font-size: 30px;
  font-family: 'Rubik-Regular';
`;

export const LessonInfo = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 0 24px;
`;

export const LessonNumberText = styled.Text`
  color: #a0a0b2;
  font-size: 12px;
  font-family: 'Roboto-Regular';
`;

export const LessonDuration = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
`;

export const LessonDurationText = styled.Text`
  color: #a0a0b2;
  font-size: 12px;
  font-family: 'Roboto-Regular';
  margin-left: 8px;
`;

export const LessonDescription = styled.Text`
  color: #6c6c80;
  font-size: 15px;
  font-family: 'Roboto-Regular';
  line-height: 25px;
`;

export const LessonOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PreviousLessonButton = styled.TouchableOpacity`
  padding: 18px 24px;
  flex-direction: row;
  align-items: center;
`;

export const PreviousLessonButtonText = styled.Text`
  color: #ff6680;
  font-size: 15px;
  font-family: 'Roboto-Regular';
`;

export const NextLessonButton = styled.TouchableOpacity`
  background: #ff6680;
  padding: 18px 24px;
  border-radius: 40px;

  flex-direction: row;
  align-items: center;
`;

export const NextLessonButtonText = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto-Regular';
  margin-right: 8px;
`;
