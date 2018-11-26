import React from 'react';
import { ScrollView, StyleSheet, View, text} from 'react-native';
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

 constructor(props) {     //CRN no table, names(schedule1 etc) are buttons that calls schedule table
  super(props);
  this.state = {
    tableHead: ['', 'CRN codes'],
    tableTitle: ['Schedule1', 'Schedule2', 'Schedule3', 'Schedule4'],
    tableData: [
      ['12345', '12396', '12347','12348', '12349', '12350'],
      ['35625', '85545', '13524','25624', '23462', '45325'],
      ['45110', '10468', '10432','26422', '12354', '23154'],
      ['11002', '21352', '52103','20743', '15207', '12310'],
    ]
  }
  };
   /*       // Hard coded schedule example    //flexArr={[1.68,1,1,1,1,1]} for scheduler example , width needs to be maintain
   constructor(props) {
  super(props);
  this.state = {
    tableHead: [' ', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    tableTitle: ['8.40-9.30','9.40-10.30','10.40-11.30','11.40-12.30','12.40-13.30','13.40-14.30','14.40-15.30','15.40-16.30','16.40-17.30','17.40-18.30','18.40-19.30','19.40-20.30'],
    tableData: [
      ['', 'ENS 203', '','ENS 203', ''],
      ['ENS 203', 'ENS 204R', 'MATH 201','', ''],
      ['ENS 203', 'ENS 204R', 'MATH 201','', 'HUM 202D'],
      ['', 'HUM 202', 'CS 204','MATH 201R', 'HUM 202D'],
      ['', 'HUM 202', 'CS 204','', 'MATH 204R'],
      ['MATH 204', '', '','', 'MATH 204R'],
      ['MATH 204', 'MATH 204', '','', ''],
      ['', '', '','MATH 201R', 'CS 204R'],
      ['ENS 204', '', '','ENS 203R', 'CS 204R '],
      ['ENS 204', '', '','ENS 203R', 'CS 204R'],
      ['', '', '','', ''],
      ['', '', '','', '']
    ]
  }
  };
  */

  render() {
      const state = this.state;
    return (
      <View style={styles.container}>
        <Table>
          <Row data={state.tableHead} flexArr={[1,3]} style={styles.head} textStyle={styles.text}/>    
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} flexArr={[2]} style={styles.title} heightArr={[32,32]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff' }, //padding --> yanlardaki bosluk, padding top ==> ustteki bosluk
  head: {  height: 30,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f1fa' },
  row: {  height: 32  },
  text: { textAlign: 'center' }
});

