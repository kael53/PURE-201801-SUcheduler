import React, {Component} from 'react'; import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Picker,
  View,
  Button,
} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import PropTypes from 'prop-types';
import AlphabetListView from 'react-native-alphabetlistview';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff' }, //padding --> yanlardaki bosluk, padding top ==> ustteki bosluk
  head: { height: 32, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 2, backgroundColor: '#f6f1fa' },
  row: { height: 32 },
  text: { textAlign: 'center' }
});

class SectionHeader extends Component {
  render() {
    // inline styles used for brevity, use a stylesheet when possible
    var textStyle = {
      textAlign:'center',
      color:'#fff',
      fontWeight:'700',
      fontSize:16
    };

    var viewStyle = {
      backgroundColor: '#ccc'
    };
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.title}</Text>
      </View>
    );
  }
}

class SectionItem extends Component {
  render() {
    return (
      <Text style={{color:'#f00'}}>{this.props.title}</Text>
    );
  }
}

class Cell extends Component {
  render() {
    return (
      <View style={{height:30}}>
        <CheckBox
		title={this.props.item}
		checked={this.props.selected[this.props.index]}
		onPress={() => {this.props.onSelect(this.props.index);}}
	/>
      </View>
    );
  }
}

export default class GenerateScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        C: ['CS201','CS204','CS300','CS301','CS305','CS402'],
        E: ['ENG101','ENG102'],
        H: ['HIST191','HIST192','HUM201','HUM202','HUM203'],
        M: ['MATH101','MATH102','MATH201','MATH203','MATH204'],
        N: ['NS101','NS102'],
        S: ['SPS101','SPS102','SPS303'],
        T: ['TLL001','TLL101','TLL102'],
      },
      selected: []
    };
  }

  static navigationOptions = {
    header: null,
  };

  _navigateTo = (routeName: string) => {
    this.props.navigation.navigate(routeName);
  };

  render() {

    return (

      <View style={styles.container}>

	<Button title="Time Preferences" onPress={() => { this._navigateTo('TimePref')}} />

	<AlphabetListView
        data={this.state.data}
        cell={Cell}
	cellProps={this.state.selected}
        cellHeight={30}
	onCellSelect={(index) => {alert("Selected " + index); let selected = [..this.state.selected]; selected[index] = true; this.setState({selected}); }}
        sectionListItem={SectionItem}
        sectionHeader={SectionHeader}
        sectionHeaderHeight={22.5}
      	/>

	

      </View>
    );


  } //render closed expectation  : ! Please Dont change * GBoss *

} //export   closed expectation : ! Please Dont change * GBoss *
