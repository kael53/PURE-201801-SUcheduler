import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Component } from 'react';
import { DataTable, Header, HeaderCell, Row, Cell } from 'react-native-data-table';
import { ListView } from 'realm/react-native';
import ScheduleRow from '../components/ScheduleRow.js';

export default class SchedulesScreen extends React.Component {

  static navigationOptions = {
    title: 'My Schedules',
    headerStyle: {
      backgroundColor: 'lightblue'
    }
  };

 constructor(props) {
  super(props);
  this.ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    });
 };

    renderRow(item) {
      return (
	<ScheduleRow name={item.name} schedule={item.schedule} />
      );
    }

    renderHeader() {
      return (
	<Header>
	  <HeaderCell text="Names" />
	  <HeaderCell text="CRNs" />
	</Header>
      );
    }


  render() {
    const schedules = this.props.navigation.state.params.schedules;

    return (
     <View style={styles.container}>
	<DataTable
	  dataSource={this.ds.cloneWithRows(schedules)}
	  renderRow={this.renderRow}
	  renderHeader={this.renderHeader}
        />
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff' }, //padding --> yanlardaki bosluk, padding top ==> ustteki bosluk
  head: { height: 32, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 2, backgroundColor: '#f6f1fa' },
  row: { height: 32 },
  text: { textAlign: 'center', fontSize: 14 },
  textHead: { textAlign: 'center', fontSize: 18 },
  textCol: { textAlign: 'center', fontSize: 18 },
});

