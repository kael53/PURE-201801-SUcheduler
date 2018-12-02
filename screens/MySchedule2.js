import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import {Component }  from 'react' ;

export default class MySchedule2 extends React.Component {

  static navigationOptions = {
    title: 'Schedule1',
    headerStyle: {
      backgroundColor: '#11ABD8'
    }
  };

 constructor(props) { 
  super(props);

  const elementButton = (value) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate('MySchedules')}>
    <View style={styles.btn}>
    <Text style={styles.text}>{value}</Text>
    </View>
    </TouchableOpacity>
    );

  this.state = {
    tableHead: [elementButton('Back'), 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    tableTitle: ['8.40\n9.30','9.40\n10.30','10.40\n11.30','11.40\n12.30','12.40\n13.30','13.40\n14.30','14.40\n15.30','15.40\n16.30','16.40\n17.30','17.40\n18.30','18.40\n19.30','19.40\n20.30'],
    tableData: [
      ['', '', '','', ''],
      ['', '', '','', ''],
      ['', '', '','', ''],
      ['', '', '','', ''],
      ['', '', '','', ''],
      ['', '', '','', ''],
      ['', '', '','', ''],
      ['', '', '','', ''],
      ['', '', '','', ''],
      ['', '', '','', ''],
      ['', '', '','', ''],
      ['', '', '','', '']
    ]
  }
};

  render() {

  const state = this.state;

  return (
    <View style={styles.container}>
    <Table>
    <Row data={state.tableHead} flexArr={[0.85,1,1,1,1,1]} style={styles.head} textStyle={styles.text}/>    
    <TableWrapper style={styles.wrapper}>
    <Col data={state.tableTitle}  style={styles.title} heightArr={[32,32]} textStyle={styles.text}/>
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
  title: { flex: 1, backgroundColor: '#f6f1fa' },
  row: {  height: 32  },
  text: { textAlign: 'center' }
});

