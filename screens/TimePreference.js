import React from 'react';
import {  StyleSheet,Dimensions, View, Text, TouchableOpacity, BackHandler, AppRegistry, Button } from 'react-native';
import { Component } from 'react';
import { DataTable, Header, HeaderCell, Row, Cell, CheckableCell } from 'react-native-data-table';
import { ListView } from 'realm/react-native';
import { Feather } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HEIGHT = Dimensions.get("window").height

export default class TimePreference extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
    	headerTitle: 'Time Preferences',
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
        	  onPress={() => { navigation.navigate('Generate', { freeTimes: navigation.getParam('freeTimes')()}) }}
      	  >
          <Text style={{fontWeight: '500', fontSize: 18, color: 'rgba(0,123,217,1.0)'}}>
            Done
          </Text>
          </TouchableOpacity>
    	)
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ freeTimes: this._freeTimes });
  }

  _freeTimes = () => {
    let ft = [];

    for (var [key, value] of this.state.freeTimes)
      if (value) ft.push(key);

    return ft;
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  };


  handleBackButtonClick() {
    this.props.navigation.goBack();
    return true;
  };

  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    const freeTimes = this.props.navigation.state.params.freeTimes;
    this.ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    });
    schedule = []; for (var i = 0; i < 12; i++) schedule.push({hour:(8+i)+':40', day:Array(5).fill('')});
    this.state = {
      schedule: schedule, ds: this.ds.cloneWithRows(schedule),
      freeTimes: (new Map(): Map<integer, boolean>)
    }

    freeTimes.forEach((item) => this.state.freeTimes.set(item, true));
  }

  _onPress = (d, h) => { 
     this.setState((state) => {
      const freeTimes = new Map(state.freeTimes);
      freeTimes.set(h*5+d, !freeTimes.get(h*5+d));
      return { freeTimes };
    });
  }

  renderRow = (item, sid, rid) => {
      renderIsChecked = () => <View style={{height: 34,margin: 1,  backgroundColor: 'rgba(255,100,90,1.0)'}}/>;
      renderIsNotChecked = () => <View style={{height: 34,margin: 1, backgroundColor: 'rgba(195,195,195,0.8)'}}/>;

      return (
        <Row style={styles.rowButton} onPress={() => { this.state.data.splice(rid, 1); this.setState({ ds: this.ds.cloneWithRows(this.state.data) })}}>
          <Cell>{item.hour}</Cell>
          <CheckableCell key={rid*5+1} renderIsChecked={renderIsChecked} renderIsNotChecked={renderIsNotChecked} isChecked={this.state.freeTimes.get(rid*5+1)} 
            onPress={() => {  this.state.freeTimes.set(rid*5+1, !this.state.freeTimes.get(rid*5+1)) }}/>
          <CheckableCell key={rid*5+2} renderIsChecked={renderIsChecked} renderIsNotChecked={renderIsNotChecked} isChecked={this.state.freeTimes.get(rid*5+2)} 
            onPress={() => {  this.state.freeTimes.set(rid*5+2, !this.state.freeTimes.get(rid*5+2)) }}/>
          <CheckableCell key={rid*5+3} renderIsChecked={renderIsChecked} renderIsNotChecked={renderIsNotChecked} isChecked={this.state.freeTimes.get(rid*5+3)} 
            onPress={() => {  this.state.freeTimes.set(rid*5+3, !this.state.freeTimes.get(rid*5+3)) }}/>
          <CheckableCell key={rid*5+4} renderIsChecked={renderIsChecked} renderIsNotChecked={renderIsNotChecked} isChecked={this.state.freeTimes.get(rid*5+4)} 
            onPress={() => {  this.state.freeTimes.set(rid*5+4, !this.state.freeTimes.get(rid*5+4)) }}/>
          <CheckableCell key={rid*5+5} renderIsChecked={renderIsChecked} renderIsNotChecked={renderIsNotChecked} isChecked={this.state.freeTimes.get(rid*5+5)} 
            onPress={() => {  this.state.freeTimes.set(rid*5+5, !this.state.freeTimes.get(rid*5+5)) }}/>
        </Row>
      );
  }

  renderHeader() {
      return (
        <Header style={{backgroundColor: 'white', borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 1, }} >
          <HeaderCell textStyle={styles.headerText} text="TIME" />
          <HeaderCell textStyle={styles.headerText} text="MON" />
          <HeaderCell textStyle={styles.headerText} text="TUE" />
          <HeaderCell textStyle={styles.headerText} text="WED" />
          <HeaderCell textStyle={styles.headerText} text="THU" />
          <HeaderCell textStyle={styles.headerText} text="FRI" />
        </Header>
      );
  }

  render() {
    return (
      //Time Preferences
      <View style={styles.container}>
        <View style={styles.tableContainer}>
          <DataTable
            dataSource={this.state.ds}
            renderRow={this.renderRow}
            renderHeader={this.renderHeader}
          />
       </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1 
  },
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
  rowButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(100,100,100,0.15)',
    backgroundColor: 'white'
  },
});


AppRegistry.registerComponent('PURE-201801-SUcheduler', () => PURE - 201801 - SUcheduler)
