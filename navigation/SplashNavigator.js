import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';

const Welcome = createStackNavigator({
  Welcome: WelcomeScreen,
});

Welcome.navigationOptions = {
  tabBarLabel: 'Welcome',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    /> 
  ),
};
