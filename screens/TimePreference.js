import React from 'react';
import {  StyleSheet, View, Text, TouchableOpacity, BackHandler, AppRegistry, Button } from 'react-native';
import { Component } from 'react';
import { DataTable, Header, HeaderCell, Row, Cell, CheckableCell } from 'react-native-data-table';
import { ListView } from 'realm/react-native';

export default class TimePreference extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
    title: 'Time Preferences',
    headerStyle: {
      backgroundColor: 'lightblue'
    },
    headerRight: (
          <Button
                onPress={() => { navigation.navigate('Generate', { freeTimes: navigation.getParam('freeTimes')()}) }}
                title="Done"
          />
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

    console.log(ft);
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

    //console.log(freeTimes);
    freeTimes.forEach((item) => this.state.freeTimes.set(item, true));
  }

  _onPress = (d, h) => { console.log(d + " - " + h);
     this.setState((state) => {
      const freeTimes = new Map(state.freeTimes);
      freeTimes.set(h*5+d, !freeTimes.get(h*5+d));
      return { freeTimes };
    }); console.log(JSON.stringify(this.state.freeTimes));
  }

  renderRow = (item, sid, rid) => {
      renderIsChecked = () => <Text style={{backgroundColor: 'green'}}/>;
      renderIsNotChecked = () => <Text style={{backgroundColor: 'red'}}/>;

      return (
        <Row>
          <Cell>{item.hour}</Cell>
	  <CheckableCell key={rid*5+1} renderIsChecked={renderIsChecked} renderIsNotChecked={renderIsNotChecked} isChecked={this.state.freeTimes.get(rid*5+1)} 
onPress={() => { console.log(rid + " - " + 1); this.state.freeTimes.set(rid*5+1, !this.state.freeTimes.get(rid*5+1)) }}/>
	  <CheckableCell key={rid*5+2} renderIsChecked={renderIsChecked} renderIsNotChecked={renderIsNotChecked} isChecked={this.state.freeTimes.get(rid*5+2)} 
onPress={() => { console.log(rid + " - " + 2); this.state.freeTimes.set(rid*5+2, !this.state.freeTimes.get(rid*5+2)) }}/>
	  <CheckableCell key={rid*5+3} renderIsChecked={renderIsChecked} renderIsNotChecked={renderIsNotChecked} isChecked={this.state.freeTimes.get(rid*5+3)} 
onPress={() => { console.log(rid + " - " + 3); this.state.freeTimes.set(rid*5+3, !this.state.freeTimes.get(rid*5+3)) }}/>
	  <CheckableCell key={rid*5+4} renderIsChecked={renderIsChecked} renderIsNotChecked={renderIsNotChecked} isChecked={this.state.freeTimes.get(rid*5+4)} 
onPress={() => { console.log(rid + " - " + 4); this.state.freeTimes.set(rid*5+4, !this.state.freeTimes.get(rid*5+4)) }}/>
	  <CheckableCell key={rid*5+5} renderIsChecked={renderIsChecked} renderIsNotChecked={renderIsNotChecked} isChecked={this.state.freeTimes.get(rid*5+5)} 
onPress={() => { console.log(rid + " - " + 5); this.state.freeTimes.set(rid*5+5, !this.state.freeTimes.get(rid*5+5)) }}/>
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
      //Time Preferences
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
  container: { flex: 1, padding: 20, paddingTop: 20 }, //padding --> yanlardaki bosluk, padding top ==> ustteki bosluk

  container3: {
    flex: 0,
    paddingTop: 20,
  },
  head: { height: 32, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 0.8, backgroundColor: '#f6f1fa' },
  row: { flex: 0, padding: 0, paddingTop: 0, height: 32 },
  text: { textAlign: 'center' },
  headText: { textAlign: 'center', fontSize: 24 },
  btn: {
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },


});


AppRegistry.registerComponent('PURE-201801-SUcheduler', () => PURE - 201801 - SUcheduler)
