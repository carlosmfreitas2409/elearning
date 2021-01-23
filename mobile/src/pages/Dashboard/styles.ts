import { FlatList } from 'react-native';
import styled from 'styled-components/native';

interface Course {
  id: string;
  name: string;
  image_url: string;
  lessons: Array<{
    name: string;
  }>;
}

export const Container = styled.View`
  flex: 1;
  background: #6548a3;
`;

export const Header = styled.View`
  background: #6548a3;
  padding: 24px 24px 32px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const CourseContainer = styled.SafeAreaView`
  background: #f0edf5;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  flex: 1;
`;

export const CourseHeader = styled.View`
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #3d3d4c;
  font-family: 'Rubik-Regular';
  font-size: 20px;
`;

export const Counter = styled.Text`
  color: #a0a0b2;
  font-family: 'Roboto-Regular';
  font-size: 15px;
`;

export const CourseList = styled(FlatList as new () => FlatList<Course>).attrs({
  numColumns: 2,
})`
  flex: 1;
  padding: 0 16px;
`;

export const Course = styled.TouchableOpacity`
  background: #ffffff;
  padding: 24px 25px;
  border-radius: 16px;
  margin: 8px;
  flex: 1;
`;

export const CourseImage = styled.Image`
  height: 64px;
  width: 64px;
  margin-bottom: 24px;
`;

export const CourseTitle = styled.Text`
  color: #6c6c80;
  font-size: 15px;
  font-family: 'Rubik-Regular';
`;

export const CourseCounter = styled.Text`
  color: #c4c4d1;
  font-size: 10px;
  font-family: 'Roboto-Regular';
`;
