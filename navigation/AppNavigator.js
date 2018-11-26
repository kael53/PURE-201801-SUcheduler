import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';
import MainTabNavigator from './MainTabNavigator';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Welcome: { screen: WelcomeScreen },
  Main: MainTabNavigator
});
