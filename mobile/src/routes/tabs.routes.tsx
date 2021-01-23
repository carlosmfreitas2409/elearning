import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import Dashboard from '../pages/Dashboard';
import Favorites from '../pages/Favorites';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelPosition: 'beside-icon',
      activeTintColor: '#FF6680',
      inactiveTintColor: '#C4C4D1',
      labelStyle: {
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        fontWeight: '500',
      },
      style: {
        height: 60,
      },
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => <Icon size={25} name="home" color={color} />,
        title: 'Home',
      }}
      name="Dashboard"
      component={Dashboard}
    />

    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <Icon size={25} name="heart" color={color} />
        ),
        title: 'Salvos',
      }}
      name="Favorites"
      component={Favorites}
    />
  </Tab.Navigator>
);

export default TabRoutes;
