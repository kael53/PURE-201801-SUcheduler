import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import {Component }  from 'react' ;

export default class MySchedulesScreen extends React.Component {

  static navigationOptions = {


    title: 'MySchedules',
    headerStyle: {

      backgroundColor: '#11ABD8'

    }
  };

_navigateTo = (routeName: string) => {
  this.props.navigation.navigate(routeName);
};

 constructor(props) {     //CRN no table, names(schedule1 etc) are buttons that calls schedule table
  super(props);

  const elementButton = (value: string) => (
    <TouchableOpacity onPress={() => this._navigateTo(value)}>
    <View style={styles.btn}>
    <Text style={styles.text}>{value}</Text>
    </View>
    </TouchableOpacity>
    );

  this.state = {
    tableHead: ['', 'CRN codes'],
    tableTitle: [elementButton('Schedule1'),elementButton('Schedule2'),elementButton('Schedule3'),elementButton('Schedule4'),elementButton('TimePref')],
    tableData: [
    ['12345', '12396', '12347','12348', '12349', '12350'],
    ['', '', '','', '', ''],
    ['', '', '','', '', ''],
    ['11002', '21352', '52103','20743', '15207', '12310'],
    ['', '', '','', '', ''],
    ]
  }
};

  render() {
    const state = this.state;

    return (
      <View style={styles.container}>
      <Table>
      <Row data={state.tableHead} flexArr={[1.99,6]} style={styles.head} textStyle={styles.text}/>    
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
  head: {  height: 32,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 2, backgroundColor: '#f6f1fa' },
  row: {  height: 32  },
  text: { textAlign: 'center' }
});

