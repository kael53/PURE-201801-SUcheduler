import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, BackHandler, AppRegistry } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { Component } from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import SimpleToggleButton from '../components/SimpleToggleButton'

export default class TimePreference extends React.Component {
  
  static navigationOptions = {
    title: 'TimePref',
    headerStyle: {
      backgroundColor: '#11ABD8'
    }
  };

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  };


  handleBackButtonClick() {
    this.props.navigation.navigate('MySchedules');
    return true;
  };
  
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this._onStateChange = this._onStateChange.bind(this)
    elementButton = (value) => (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Generate')}>
        <View style={styles.btn}>
          <Icons name={value} size={30} color='#000' style={{ marginLeft: '3%' }} />
        </View>
      </TouchableOpacity>
    );

    timeButton = () => (
      <View style={styles.container2}>
        <SimpleToggleButton/>
      </View>
    );

    this.state = {
      tableHead: [elementButton('arrow-back'), 'Mon', 'Tue', 'Wed', 'Thr', 'Fri'],
      tableTitle: ['8.40\n9.30', '9.40\n10.30', '10.40\n11.30', '11.40\n12.30', '12.40\n13.30', '13.40\n14.30', '14.40\n15.30', '15.40\n16.30', '16.40\n17.30', '17.40\n18.30', '18.40\n19.30', '19.40\n20.30'],
      tableData: [
        [timeButton(), timeButton(), timeButton(), timeButton(), timeButton()],
        [timeButton(), timeButton(), timeButton(), timeButton(), timeButton()],
        [timeButton(), timeButton(), timeButton(), timeButton(), timeButton()],
        [timeButton(), timeButton(), timeButton(), timeButton(), timeButton()],
        [timeButton(), timeButton(), timeButton(), timeButton(), timeButton()],
        [timeButton(), timeButton(), timeButton(), timeButton(), timeButton()],
        [timeButton(), timeButton(), timeButton(), timeButton(), timeButton()],
        [timeButton(), timeButton(), timeButton(), timeButton(), timeButton()],
        [timeButton(), timeButton(), timeButton(), timeButton(), timeButton()],
        [timeButton(), timeButton(), timeButton(), timeButton(), timeButton()],
        [timeButton(), timeButton(), timeButton(), timeButton(), timeButton()],
         [timeButton(), timeButton(), timeButton(), timeButton(), timeButton()]
      ],
      
    }
  }
  _onStateChange(newState) {
    const value = newState ? "ON" : "OFF"
    this.setState({ toggleState: value })
      //could be used for implementing selected free times
  };
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table>
          <Row data={state.tableHead} flexArr={[0.8, 1, 1, 1, 1, 1]} style={styles.head} textStyle={styles.headText} />
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} heightArr={[32, 32]} textStyle={styles.text} />
            <Rows data={state.tableData} flexArr={[1, 1, 1, 1, 1]} style={styles.row} textStyle={styles.text} />
          </TableWrapper>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 100 }, //padding --> yanlardaki bosluk, padding top ==> ustteki bosluk

  container2: {
    flex: 0,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  head: { height: 32, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 0.8, backgroundColor: '#f6f1fa' },
  row: {flex: 0, padding: 0, paddingTop: 0, height: 32 },
  text: { textAlign: 'center'},
  headText: { textAlign: 'center', fontSize: 24 },
  btn: {
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },

});


AppRegistry.registerComponent('PURE-201801-SUcheduler', () => PURE-201801-SUcheduler)