import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { DataTable, Header, HeaderCell, Row, Cell } from 'react-native-data-table';
import { ListView } from 'realm/react-native';
import db from '../config/database.js';

const styles = StyleSheet.create({
  container: { flex: 3, padding: 20, paddingTop: 60, backgroundColor: '#fff', height: 100 }, //padding --> yanlardaki bosluk, padding top ==> ustteki bosluk
  head: { height: 32, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 2, backgroundColor: '#f6f1fa' },
  selected: { flex: 2, backgroundColor: '#f6f1fa' },
  row: { height: 32 },
  text: { textAlign: 'center' },
  button: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff', height: 100 }, //padding --> yanlardaki bosluk, padding top ==> ustteki bosluk

});

export default class GenerateScreen extends React.Component {
  static navigationOptions = {
    title: 'Generate',
      headerStyle: {
      backgroundColor: 'lightblue'
    }
  };

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      data: [],
      ds: this.ds.cloneWithRows([]),
      freeTimes: [],
      prefs: []
    };
  }

 checkStatus (res) {
  if (res.status >= 200 && res.status < 300) {
    return res
  } else {
    let err = new Error(res.statusText)
    err.response = res
    throw err
  }
}

  _generate = () => {
    fetch("http://sucheduler-env-1.hdzgdhrn29.us-west-2.elasticbeanstalk.com/generate", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            courses: this.state.data.map(x => x.name).filter(n => n != null),
            preferences: {
		freeTimes: this.state.freeTimes
	    }
        })
    })
    .then(this.checkStatus)
    .then((response) => response.json())
    .then((responseData) => {
        let schedules = []
	for (var i in responseData.Schedules)
	     schedules.push({ name: "Schedule " + i, schedule: responseData.Schedules[i].Schedule.join(',') });
    	console.log(
           "POST Response",
           "Response Body -> " + JSON.stringify(responseData)
        )
        this.props.navigation.navigate('Schedules',{ schedules: schedules });
    })
    .catch(err => {
	if (err.response.status == 409) {
	   warnings = ""; days = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
	   console.log(JSON.stringify(err));
	   let Schedule = JSON.parse(err.response._bodyInit).Schedules[0];
	   Schedule.Warnings.forEach((item) => {
		if (item[0] == "COURSESOVERLAP") {
			warnings += "Courses " + item[1] + " and " + item[2] + " overlap on " + days[item[3]-1] + " \n";
		} else if (item[0] == "CREDITEXCEEDS") {
			warnings += "Credit exceeds the limit! (Taken: " + Schedule.Credits + ", Limit: " + item[1] + ") \n";
		}
	   });
	   alert("Error: "+ warnings);
	} else {
	   alert('Error: ' + err.response.statusText);
	}
     })
    .done();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.navigation.getParam('data', []).length !== prevProps.navigation.getParam('data', []).length) {
      this.setState({ data: [...prevState.data, ...this.props.navigation.getParam('data', [{}])], ds: this.state.ds.cloneWithRows(this.state.data) });
      this.props.navigation.setParams({ data: [] });
    }
    if (this.props.navigation.getParam('freeTimes', []).length !== prevProps.navigation.getParam('freeTimes', []).length) {
      this.setState({ freeTimes: [...this.props.navigation.getParam('freeTimes', [])] });
    }
    if (this.props.navigation.getParam('prefs', []).length !== prevProps.navigation.getParam('prefs', []).length) {
      this.setState({ prefs: [...this.props.navigation.getParam('prefs', [{}])] });
    }
  }

    renderRow = (item, sid, rid) => {
      console.log(JSON.stringify(item));
      return (
        <Row onPress={() => { this.state.data.splice(rid, 1); this.setState({ ds: this.ds.cloneWithRows(this.state.data) })}}>
          <Cell width={1}>{item.name}</Cell>
          <Cell numberOfLines={2} width={3}>{item.title}</Cell>
        </Row>
      );
    }
    renderHeader() {
      return (
        <Header>
          <HeaderCell text="Name" />
          <HeaderCell text="Title" />
        </Header>
      );
    }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Add Courses" style={styles.button} onPress={() => { this.props.navigation.navigate('AddCourse', { selected: this.state.data }) }} />
        <Button title="Time Preferences" style={styles.button} onPress={() => { this.props.navigation.navigate('TimePref', { freeTimes: this.state.freeTimes }) }} />
        <Button title="Course Preferences" style={styles.button} onPress={() => { this.props.navigation.navigate('CoursePref',{ selected: this.state.data }) }} />
	<DataTable
          dataSource={this.state.ds}
          renderRow={this.renderRow}
          renderHeader={this.renderHeader}
	  enableEmptySections={true}
        />
        <Button title="Generate" style={styles.button} onPress={() => this._generate()} />
      </View>
    );
  }
}
