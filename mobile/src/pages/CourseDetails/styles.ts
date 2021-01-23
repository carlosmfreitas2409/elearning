import styled, { css } from 'styled-components/native';

interface LessonPlayProps {
  isCompleted?: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 25px;
`;

export const CourseContainer = styled.View`
  flex: 1;
  background: #f0edf5;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  /* padding: 32px 25px; */
  padding: 32px 0px;
`;

// Header
export const CourseHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 0 25px;
`;

export const Title = styled.Text`
  color: #3d3d4c;
  font-size: 30px;
  font-family: 'Rubik-Regular';
`;

export const Counter = styled.Text`
  color: #a0a0b2;
  font-size: 15px;
  font-family: 'Roboto-Regular';
`;

// Lesson
export const LessonList = styled.View`
  padding: 0 25px;
`;

export const Lesson = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const LessonPlay = styled.View<LessonPlayProps>`
  background: #ff6680;
  border-radius: 16px;
  padding: 14px;
  z-index: 1;

  ${props =>
    props.isCompleted &&
    css`
      background: #61c5bd;
    `}
`;

export const LessonContent = styled.View`
  flex: 1;
  background: #ffffff;
  border-radius: 16px;
  margin-left: -30px;

  height: 100px;
  padding-left: 56px;
  padding-right: 24px;
  justify-content: center;
`;

export const LessonTitle = styled.Text`
  color: #6c6c80;
  font-size: 15px;
  font-family: 'Rubik-Regular';
`;

export const LessonDetails = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Details = styled.View`
  flex-direction: row;
`;

export const LessonNumberText = styled.Text`
  color: #c4c4d1;
  font-size: 10px;
  font-family: 'Roboto-Regular';
`;

export const LessonDuration = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
`;

export const LessonDurationText = styled.Text`
  color: #c4c4d1;
  font-size: 10px;
  font-family: 'Roboto-Regular';
  margin-left: 4px;
`;

export const Status = styled.View`
  background: #61c5bd;
  border-radius: 12px;
  padding: 3px 8px;
`;

export const StatusText = styled.Text`
  color: #ffffff;
  font-size: 10px;
  font-family: 'Rubito-Regular';
`;
