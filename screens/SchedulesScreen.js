import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { Component } from 'react';

export default class SchedulesScreen extends React.Component {

  static navigationOptions = {
    title: 'My Schedules',
    headerStyle: {
      backgroundColor: 'lightblue'
    }
  };

_navigateTo = (routeName: string, eProps: object) => {
  this.props.navigation.navigate(routeName);
  //add eProps to this.props
};

//getSchedule param: schedule name return: schedule object from the database
//getSchedules return: schedule names from the database

 constructor(props) {     //CRN no table, names(schedule1 etc) are buttons that calls schedule table
  super(props);

  const elementButton = (value: string) => (
    <TouchableOpacity onPress={() => this._navigateTo('Schedule', getSchedule(value))}>
    <View style={styles.btn}>
    <Text style={styles.textCol}>{value}</Text>
    </View>
    </TouchableOpacity>
    );

  var schedules = getSchedules();
  var crns = getCRNs(schedules);

  this.state = {
    tableHead: ['', 'CRN codes'],
    tableTitle: schedules,
    tableData: crns
  }
};

  render() {
    const state = this.state;

    return (
      <View style={styles.container}>
      <Table>
      <Row data={state.tableHead} flexArr={[1.99,6]} style={styles.head} textStyle={styles.textHead}/>
      <TableWrapper style={styles.wrapper}>
      <Col data={state.tableTitle} style={styles.title} heightArr={[32,32]} textStyle={styles.text}/>
      <Rows data={state.tableData} flexArr={[1, 1, 1, 1, 1, 1]} style={styles.row} textStyle={styles.text}/>
      </TableWrapper>
      </Table>
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

