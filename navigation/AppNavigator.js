import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import WelcomeScreen from '../screens/WelcomeScreen';

export default createAppContainer(createSwitchNavigator({  // You could add another route here for authentication.
	// Read more at https://reactnavigation.org/docs/en/auth-flow.html

	//Welcome: { screen: WelcomeScreen },
	Main: MainTabNavigator
}));
