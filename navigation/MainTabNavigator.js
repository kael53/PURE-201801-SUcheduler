import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import GenerateScreen from '../screens/GenerateScreen';
import SchedulesScreen from '../screens/SchedulesScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import TimePreference from '../screens/TimePreference';
import AddCourseScreen from '../screens/AddCourseScreen'   ;
import CoursePreference from '../screens/CoursePreference';

const GenerateStack = createStackNavigator({
  Generate: GenerateScreen,
  Schedules: SchedulesScreen,
  Schedule: ScheduleScreen,
  AddCourse: AddCourseScreen,
  TimePref: TimePreference,
  CoursePref: CoursePreference
});

GenerateStack.navigationOptions = {
  tabBarLabel: 'Generate',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ 'md-home' }
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
      name={ 'md-calendar'}
    />
  ),
};


export default createBottomTabNavigator({
  GenerateStack,
  MySchedulesStack,
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
