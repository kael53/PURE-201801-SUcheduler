import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import WelcomeScreen from '../screens/WelcomeScreen';
import MySchedule1 from '../screens/MySchedule1';
import MySchedule2 from '../screens/MySchedule2';
import MySchedule3 from '../screens/MySchedule3';
import MySchedule4 from '../screens/MySchedule4';
import TimePreference from '../screens/TimePreference';

const TimePreferenceStack = createStackNavigator({
	TimePref: TimePreference,
});
TimePreferenceStack.navigationOptions = {
};

const Schedule1Stack = createStackNavigator({
	Schedule1: MySchedule1
});

const Schedule2Stack = createStackNavigator({
	Schedule2: MySchedule2
});

const Schedule3Stack = createStackNavigator({
	Schedule3: MySchedule3
});

const Schedule4Stack = createStackNavigator({
	Schedule4: MySchedule4
});


export default createAppContainer(createSwitchNavigator({  // You could add another route here for authentication.
	// Read more at https://reactnavigation.org/docs/en/auth-flow.html

	//Welcome: { screen: WelcomeScreen },
	Main: MainTabNavigator,
	Schedule1Stack,
	Schedule2Stack,
	Schedule3Stack,
	Schedule4Stack,
	TimePreferenceStack
}));