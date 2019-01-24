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
  _onPress = () => {
    this.props.onPressItem(this.props.name);
  };

  render() {
    return (
    <TouchableOpacity onPress={this._onPress}>
    <View>
      <Text style={{ color: "blue" }}>
        {this.props.name}
      </Text>
    </View>
    </TouchableOpacity>
    );
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
      data: []
    };
  }

  _navigateTo = (routeName: string) => {
    this.props.navigation.navigate(routeName);
  };

  _keyExtractor = (item, index) => index.toString();

  _onPressItem = (name: string) => {
    let allItems = [...this.state.data];
    let filteredItems = allItems.filter(item => item.name != name);
    this.setState({ data: filteredItems })
  };

  _renderItem = ({ item }) => (
    <SelectedItem
      name={item.name}
      onPressItem={this._onPressItem}
    />
  );

  componentDidUpdate(prevProps, prevState) {
    if (this.props.navigation.getParam('data', []).length !== prevProps.navigation.getParam('data', []).length) {
      console.log(prevProps.navigation.getParam('data', []));
      this.setState({ data: [...prevState.data, ...prevProps.navigation.getParam('data', [{}])] });
      this.props.navigation.setParams({ data: [] });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Add Courses" style={styles.button} onPress={() => { this._navigateTo('AddCourse') }} />
        <Button title="Time Preferences" style={styles.button} onPress={() => { this._navigateTo('TimePref') }} />

        <FlatList style={StyleSheet.selected}
          data= {this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          />
      </View>
    );
  }
}
