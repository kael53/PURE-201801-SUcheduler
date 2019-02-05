import React from 'react';
import { StyleSheet, View, RefreshControl, Text,Dimensions, TouchableOpacity, Alert } from 'react-native';
import { Component } from 'react';
import { DataTable, Header, HeaderCell, Row, Cell } from 'react-native-data-table';
import { ListView } from 'realm/react-native';
import db from '../config/database.js';

import { Feather } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HEIGHT = Dimensions.get("window").height

export default class SchedulesScreen extends React.Component {


  static navigationOptions = ({ navigation }) => {
    return {
    	headerTitle: (navigation.state.params ? '' : 'My ') + 'Schedules',
    	headerLeft: navigation.state.params ? (
        <TouchableOpacity
          style={{height: '100%', justifyContent: 'center', alignItems:' center', paddingHorizontal: 16}}
          activeOpacity={0.8}
          onPress={() => { navigation.goBack() }}
        >
          <Feather size={26} color={"black"} name={"chevron-left"}/>
        </TouchableOpacity>
      ) : null,
    };
  };

 constructor(props) {
  super(props);
  this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
  });
  this.state = { refreshing: false, schedules: this.props.navigation.getParam('schedules', []) };
 };

 _refresh = () => {
 	if (this.props.navigation.state.params) return;
 	this.setState({ refreshing: true });
 	let schedules = []
 	db.transaction(
        tx => { tx.executeSql('select * from schedules', [], (_, { rows }) => {
                rows._array.forEach((item) => {
                                schedules.push({ name: item.name, schedule: item.schedule })
                        });
                });
              }
    , 
    (e) => { 
    	this.setState({ refreshing: false }); 
    }, 
    () => {
    	this.setState({ refreshing: false, schedules: schedules }); 
    });
 }

 componentWillMount() {
 	this._refresh();
 }

  renderRow = (item) => {
    return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Schedule', { title: item.name, schedule: item.schedule, refresh: this._refresh, isSaved: (this.props.navigation.state.params ? false : true) }) }>
        <Row style={styles.rowButton}>
          <Cell textStyle={styles.rowText} width={2}>{item.name}</Cell>
          <Cell numberOfLines={3} textStyle={styles.rowText1} width={5}>{item.schedule}</Cell>
        </Row>
        </TouchableOpacity>
    );
  }

  renderHeader() {
    return (
      <Header style={{backgroundColor: 'white', borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 1, }} >
        <HeaderCell textStyle={styles.headerText} text="Names" />
        <HeaderCell textStyle={styles.headerText} text="CRNs" />
      </Header>
    );
  }


  render() {
    return (
     <View style={styles.container}>
      <View style={styles.tableContainer}>
        <DataTable
        refreshControl={
          <RefreshControl
          	refreshing={this.state.refreshing}
            onRefresh={this._refresh}
          />
        }
        dataSource={this.ds.cloneWithRows(this.state.schedules)}
        renderRow={this.renderRow}
        renderHeader={this.renderHeader}
        enableEmptySections
        />
      </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerText: {
    fontSize: 14,
    paddingHorizontal: 3,
    marginLeft: 5,
    paddingTop: 12,
    paddingBottom: 12,
    fontWeight: '700'
  },
  tableContainer: {
    marginTop: 16,
    height: SCREEN_HEIGHT* 0.75,
    marginHorizontal: 16,
    borderWidth: 1,
    backgroundColor: 'rgba(250,250,250,1)',
    borderColor: 'rgba(220,220,220,1)',
    borderRadius: 4,
    overflow: 'hidden'
  },
  rowText: {
    fontWeight: '600',
    fontSize: SCREEN_WIDTH<321? 14:15,
  }, 
  rowText1: {
    fontWeight: '400',
    fontSize: SCREEN_WIDTH<321? 14:15,
    color: 'rgba(50,50,50,0.8)',
    paddingLeft: 10,
  },  
  rowButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SCREEN_WIDTH<321?12:14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: 'rgba(100,100,100,0.15)',
    backgroundColor: 'white'
  },
});

