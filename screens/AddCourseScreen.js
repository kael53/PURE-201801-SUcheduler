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
import db from '../config/database.js';

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

class MyListItem extends React.Component {
  _onPress = () => {
    this.props.onPressItem(this.props.name);
  };

  render() {
    const textColor = this.props.selected ? "blue" : "black";
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={{ color: textColor }}>
            {this.props.name} --- {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class AddCourseScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
    	headerTitle: 'Add Courses',
    	headerStyle: {
      	  backgroundColor: 'lightblue'
    	},
    	headerRight: (
      	  <Button
        	onPress={() => { navigation.navigate('Generate', { data: navigation.getParam('selected')() }) }}
        	title="Done"
        	//color="#fff"
      	  />
    	)
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ selected: this._selected });
  }

  _selected = () => {
	let selected = [...this.state.data];
	return selected.filter(
		(item) => { return this.state.selected.has(item.name) && this.state.selected.get(item.name); }
	, this);
  }

  constructor(props) {
    super(props);
    const selecteds = this.props.navigation.state.params.selected;
    let course = [];

    db.transaction(
	tx => { tx.executeSql('select * from course', [], (_, { rows }) =>
		rows._array.forEach((item) => course.push({name: item.subject+item.number, title: item.description}))
        	);
              }
    , (e) => console.log(e), () => this.setState({ data: course.filter(item =>!this.isSelected(item, selecteds), this) }));

    this.state = {
      data: [],
      /*data: [
        { name: 'CS201', title: 'Introduction to Computing' },
        { name: 'CS204', title: 'Advanced Programming' },
        { name: 'CS300', title: 'Data Structures' },
        { name: 'CS301', title: 'Algorithms' },
        { name: 'CS305', title: 'Programming Languages' },
        { name: 'CS402', title: 'Compiler Design' },
        { name: 'ENG101', title: 'Freshman English I' },
        { name: 'ENG102', title: 'Freshman English II' },
        { name: 'HIST191', title: 'Principles of Atatürk and the History of the Turkish Revolution I' },
        { name: 'HIST192', title: 'Principles of Atatürk and the History of the Turkish Revolution II' },
        { name: 'HUM201', title: 'Major Works of Literature - Myths and Archetypes' },
        { name: 'HUM202', title: 'Major Works of Western Art' },
        { name: 'HUM203', title: 'Major Works of Ottoman Culture' },
        { name: 'MATH101', title: 'Calculus I' }, { name: 'MATH102', title: 'Calculus II' }, { name: 'MATH201', title: 'Linear Algebra' }, { name: 'MATH203', title: 'Introduction to Probability' }, { name: 'MATH204', title: 'Discrete Mathematics' },
        { name: 'NS101', title: 'Science of Nature I' }, { name: 'NS102', title: 'Science of Nature II' },
        { name: 'SPS101', title: 'Humanity and Society I' }, { name: 'SPS102', title: 'Humanity and Society II' }, { name: 'SPS303', title: 'Law and Ethics' },
        { name: 'TLL001', title: 'Communication Skills in Turkish' }, { name: 'TLL101', title: 'Turkish Language and Literature I' }, { name: 'TLL102', title: 'Turkish Language and Literature II' },
      ].filter(item => !this.isSelected(item, selecteds), this),*/
      selected: (new Map(): Map<string, boolean>)
    };
  }

  _keyExtractor = (item, index) => item.name;

  _onPressItem = (name: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(name, !selected.get(name)); // toggle
      return { selected };
    });
  };

  _renderItem = ({ item }) => (
    <MyListItem
      name={item.name}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.name)}
      title={item.title}
    />
  );

  isSelected = (comp, list) => {
     var found = false;
     list.map((item, index) => { if (item.name === comp.name) found = true; });
     return found;
  }

  render() {
    return (
      <View style={styles.container}>
        <AlphaScrollFlatList
          data={this.state.data.sort((prev,next) => prev.name.localeCompare(next.name))}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          reverse={false}
          itemHeight={500}
        />
      </View>
    );

  }
}
