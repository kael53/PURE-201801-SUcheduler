import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import GenerateScreen from '../screens/GenerateScreen';
import MySchedulesScreen from '../screens/MySchedulesScreen';
import SettingsScreen from '../screens/SettingsScreen';

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
