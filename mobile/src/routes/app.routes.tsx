import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import TabRoutes from './tabs.routes';

import Home from '../pages/Home';
import CourseDetails from '../pages/CourseDetails';
import LessonDetails from '../pages/LessonDetails';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator
      screenOptions={{ cardStyle: { backgroundColor: '#6548A3' } }}
      initialRouteName="Home"
    >
      <App.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <App.Screen
        name="MainBottom"
        component={TabRoutes}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <App.Screen
        name="CourseDetails"
        component={CourseDetails}
        options={{
          headerShown: false,
        }}
      />

      <App.Screen
        name="LessonDetails"
        component={LessonDetails}
        options={{
          headerShown: false,
        }}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
