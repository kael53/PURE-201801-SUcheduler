import React, { Component } from 'react'; import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Picker,
  View,
  Button,
  FlatList
} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import PropTypes from 'prop-types';
import AlphaScrollFlatList from 'alpha-scroll-flat-list';

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

class SelectedItem extends React.Component {
  render() {
    <View>
      <Text style={{ color: "blue" }}>
        {this.props.name}
      </Text>
    </View>
  }
}

export default class GenerateScreen extends React.Component {
  static navigationOptions = {
    title: 'Generate',
      headerStyle: {
      backgroundColor: 'lightblue'
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: (new Map(): Map<string, boolean>)
    };
  }

  _navigateTo = (routeName: string) => {
    this.props.navigation.navigate(routeName);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Add Courses" style={styles.button} onPress={() => { this._navigateTo('AddCourse') }} />
        <Button title="Time Preferences" style={styles.button} onPress={() => { this._navigateTo('TimePref') }} />

        <FlatList style={StyleSheet.selected}
          data= {this.state.data.filter(item => item.selected)}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          />
      </View>
    );

  }
}
