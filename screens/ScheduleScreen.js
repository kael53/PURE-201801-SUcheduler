import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, BackHandler} from 'react-native';
import { Component }  from 'react' ;
import { DataTable, Header, HeaderCell, Row, Cell } from 'react-native-data-table';
import { ListView } from 'realm/react-native';
import db from '../config/database.js';

export default class ScheduleScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Schedule'),
      headerStyle: {
        backgroundColor: 'lightblue'
      }
    };
  };

  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    });
    schedule = []; for (var i = 0; i < 12; i++) schedule.push({hour:(8+i)+':40 - '+(9+i)+':30', day:Array(5).fill('')});
    this.state = { schedule: schedule, ds: this.ds.cloneWithRows(schedule) };
  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    const crns = this.props.navigation.state.params.schedule;
    schedule = []; for (var i = 0; i < 12; i++) schedule.push({hour:(8+i)+':40', day:Array(5).fill('')});

    db.transaction(
        tx => { tx.executeSql('select session.cn, session.type, session.section, date.day, date.start, date.end from session inner join date on session.crn = date.crn where session.crn in ('+crns+')', [], (_, { rows }) => {
		rows._array.forEach((item) => {
				for (var i = 0; i < (item.end - item.start + 1); i++)
					schedule[item.start + i].day[item.day-1] = item.cn+item.type + ' - ' + item.section;
				this.setState({ schedule: schedule, ds: this.ds.cloneWithRows(schedule) });
			});
		});
              }
    , (e) => console.log(e), () => console.log("success"));


  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    this.props.navigation.goBack();
    return true;
  }

  renderRow(item) {
      console.log(JSON.stringify(item));
      return (
        <Row>
	  <Cell width={0.7}>{item.hour}</Cell>
          <Cell numberOfLines={2} width={1.1}>{item.day[0]}</Cell>
          <Cell numberOfLines={2} width={1.1}>{item.day[1]}</Cell>
          <Cell numberOfLines={2} width={1.1}>{item.day[2]}</Cell>
          <Cell numberOfLines={2} width={1.1}>{item.day[3]}</Cell>
          <Cell numberOfLines={2} width={1.1}>{item.day[4]}</Cell>
        </Row>
      );
  }

  renderHeader() {
      return (
        <Header>
          <HeaderCell text="-" />
          <HeaderCell text="MON" />
          <HeaderCell text="TUE" />
          <HeaderCell text="WED" />
          <HeaderCell text="THU" />
          <HeaderCell text="FRI" />
        </Header>
      );
  }


  render() {
    return (
      <View style={styles.container}>
	<DataTable
          dataSource={this.state.ds}
          renderRow={this.renderRow}
          renderHeader={this.renderHeader}
        />
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff' }, //padding --> yanlardaki bosluk, padding top ==> ustteki bosluk
  head: {  height: 32,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 0.8, backgroundColor: '#f6f1fa' },
  row: {  height: 32 },
  text: { textAlign: 'center'  ,fontSize: 12 },
  headText: { textAlign: 'center', fontSize:24 },
  btn: {
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
});

