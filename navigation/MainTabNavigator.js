import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import GenerateScreen from '../screens/GenerateScreen';
import SchedulesScreen from '../screens/SchedulesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import TimePreference from '../screens/TimePreference';
import AddCourseScreen from '../screens/AddCourseScreen'   ;
import CoursePreference from '../screens/CoursePreference'; 

const GenerateStack = createStackNavigator({
  Generate: GenerateScreen,
  AddCourse: AddCourseScreen,
  TimePref: TimePreference ,
  CoursePref: CoursePreference 
  
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
  Schedules: SchedulesScreen,
  Schedule: ScheduleScreen
});

MySchedulesStack.navigationOptions = {
  tabBarLabel: 'My Schedules',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
       name={
        Platform.OS === 'ios'
          ? `ios-list${focused ? '' : ''}`
          : 'md-information-circle'
      }
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
      name={Platform.OS === 'ios' ? `ios-settings${focused ? '' : ''}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  GenerateStack,
  MySchedulesStack,
  SettingsStack,
},
 {
   tabBarOptions: {
 
  activeBackgroundColor: 'rgb(226,226,226)',

  style: {
    backgroundColor: 'white',
  },
} 
  }
);
