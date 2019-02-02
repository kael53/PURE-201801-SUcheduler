import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, BackHandler, AppRegistry, Button , Platform  } from 'react-native';
import { Component } from 'react';
import SimpleToggleButton from '../components/SimpleToggleButton';
import MultipleChoice from 'rn-multiple-choice';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: { flex: 3, padding: 20, paddingTop: 60, backgroundColor: '#fff', height: 100 }, //padding --> yanlardaki bosluk, padding top ==> ustteki bosluk
  head: { height: 32, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 2, backgroundColor: '#f6f1fa' },
  selected: { flex: 2, backgroundColor: '#f6f1fa' },
  row: { height: 32 },
  text: { textAlign: 'center' },
  button: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff', height: 100 }, //padding --> yanlardaki bosluk, padding top ==> ustteki bosluk

});


export default class CoursePreference extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
    	headerTitle: 'Course Preferences',
    	headerStyle: {
      	  backgroundColor: 'lightred' ,
          color:'red' ,
    	  headerTintColor: 'Blue',
        },
    	headerRight: (
      	  <Button
        	onPress={() => { navigation.navigate('Generate', { data: navigation.getParam('selected')() }) }}
        	title="Done"
      	  />
    	)
    };
  };


  render() {
    return (
      <View style={styles.container}>
       <Text style={{ color: "red" }}>
        {"Hello you have to integrate me with added courses."}
      </Text>
      </View>
    );

  }
}

