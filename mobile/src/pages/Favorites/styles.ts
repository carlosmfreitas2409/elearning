import styled from 'styled-components/native';

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
  flex: 1;
  background: #f0edf5;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 24px;
`;

export const Title = styled.Text`
  color: #3d3d4c;
  font-family: 'Rubik-Regular';
  font-size: 20px;
`;
