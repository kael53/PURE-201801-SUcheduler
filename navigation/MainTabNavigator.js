import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import GenerateScreen from '../screens/GenerateScreen';
import MySchedulesScreen from '../screens/MySchedulesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MySchedule1 from '../screens/MySchedule1';
import MySchedule2 from '../screens/MySchedule2';
import MySchedule3 from '../screens/MySchedule3';
import MySchedule4 from '../screens/MySchedule4';
import TimePreference from '../screens/TimePreference';




const GenerateStack = createStackNavigator({
  Generate: GenerateScreen,
});

GenerateStack.navigationOptions = {
  tabBarLabel: 'Generate',
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

const MySchedulesStack = createStackNavigator({
  MySchedules: MySchedulesScreen,
});

MySchedulesStack.navigationOptions = {
  tabBarLabel: 'MySchedules',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  GenerateStack,
  MySchedulesStack,
  SettingsStack,

});
