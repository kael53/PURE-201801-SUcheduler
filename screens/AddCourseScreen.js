import React, { Component } from 'react'; import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Dimensions,
  FlatList
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import base_url from '../config/api.js';

const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HEIGHT = Dimensions.get("window").height

class MyListItem extends React.Component {
  _onPress = () => {
    this.props.onPressItem(this.props.name);
  };

  render() {
    const textColor = this.props.selected ? 'rgba(0,123,217,1.0)' : "black";
    const textColor2 = this.props.selected ? 'rgba(0,123,217,1.0)' : "rgba(0,0,0,0.75)";

    const bgColor = this.props.selected ? 'white' : "white";
    return (
      <TouchableOpacity onPress={this._onPress} activeOpacity={0.75} style={[styles.rowButton,{backgroundColor: bgColor}]}>
        {this.props.selected ? 
        <View style={{marginRight: 8}}>
          <Feather size={20}  color={'rgba(0,123,217,1.0)'} name={"check-circle"}/>
        </View>
        :
          null
        }
        <Text style={[styles.rowText, {color: textColor}]}>
          {this.props.name}
        </Text>
        <Text numberOfLines={1} style={[styles.rowText1, {color: textColor2}]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default class AddCourseScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
    	headerTitle: 'Add Courses',
    	headerStyle: {
      },
      headerLeft: (
        <TouchableOpacity
          style={{height: '100%', justifyContent: 'center', alignItems:' center', paddingHorizontal: 16}}
          activeOpacity={0.8}
          onPress={() => { navigation.goBack() }}
        >
          <Feather size={26} color={"black"} name={"chevron-left"}/>
        </TouchableOpacity>
      ),
    	headerRight: (
      	  <TouchableOpacity
            style={{height: '100%', justifyContent: 'center', alignItems:' center', paddingHorizontal: 16}}
            activeOpacity={0.8}
        	  onPress={() => { navigation.navigate('Generate', { data: navigation.getParam('selected')() }) }}
      	  >
          <Text style={{fontWeight: '500', fontSize: 18, color: 'rgba(0,123,217,1.0)'}}>
            Done
          </Text>
          </TouchableOpacity>
    	)
    };
  };

  componentWillMount() {
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

    fetch(base_url+"/courses", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            method: "getCs"
        })
    })
    .then((response) => response.json())
    .then((responseData) => {
		responseData.courses.forEach((item) => course.push({name: item.name, title: item.title}));
		this.setState({ data: course.filter(item =>!this.isSelected(item, selecteds), this) });
    })
    .done();

    this.state = {
      data: [],
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
        <FlatList
          data={this.state.data.sort((prev,next) => prev.name.localeCompare(next.name))}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          removeClippedSubviews={false}
          style={{flex:1}}
          ItemSeparatorComponent={() => <View style={{height: 1, width: SCREEN_WIDTH, backgroundColor: 'rgba(100,100,100,0.15)'}}/>}
        />
      </View>
    );

  }
}


const styles = StyleSheet.create({
  rowButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SCREEN_WIDTH<321?12:14,
    paddingHorizontal: 16
  },
  rowText: {
    fontWeight: '600',
    fontSize: SCREEN_WIDTH<321? 15:16,
  },  
  rowText1: {
    fontWeight: '400',
    flex: 1,
    textAlign: 'right',
    paddingLeft: 20,
    fontSize: SCREEN_WIDTH<321? 15:16,
  },  

  container: { flex: 1, backgroundColor: '#fff'}, //padding --> yanlardaki bosluk, padding top ==> ustteki bosluk
  head: { height: 32, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 2, backgroundColor: '#f6f1fa' },
  selected: { flex: 2, backgroundColor: '#f6f1fa' },
  row: { height: 32 },
  text: { textAlign: 'center' },
  button: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff', height: 100 }, //padding --> yanlardaki bosluk, padding top ==> ustteki bosluk

});
