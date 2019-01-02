import React from 'react';
import { createSwitchNavigator,createStackNavigator, createAppContainer } from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';
import MainTabNavigator from './MainTabNavigator';
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
export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html

  //Welcome: { screen: WelcomeScreen },
  Main: MainTabNavigator,
  Schedule1: MySchedule1,
  Schedule2: MySchedule2,
  Schedule3: MySchedule3,
  Schedule4: MySchedule4,
  TimePreferenceStack


}));
