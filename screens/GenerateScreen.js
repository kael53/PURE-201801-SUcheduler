import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image, Button, Dimensions } from 'react-native';
import { DataTable, Header, HeaderCell, Row, Cell } from 'react-native-data-table';
import { ListView } from 'realm/react-native';
import { Feather,EvilIcons } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HEIGHT = Dimensions.get("window").height

export default class GenerateScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
    	headerTitle: 'SUCHEDULER',
    	headerStyle: {
      },
    };
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
	    responseData.Schedules.forEach( (item, index) =>
	     	schedules.push({ name: "Schedule " + parseInt(index+1), schedule: item.Schedule.join(',') })
	    );
        this.props.navigation.navigate('Schedules',{ schedules: schedules });
    })
    .catch(err => {
	if (err.response.status == 409) {
	   warnings = ""; days = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
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
    return (
      <Row style={styles.rowButton} onPress={() => { this.state.data.splice(rid, 1); this.setState({ ds: this.ds.cloneWithRows(this.state.data) })}}>
        <Cell width={1} textStyle={[styles.rowText]}>{item.name}</Cell>
        <Cell width={3} textStyle={[styles.rowText1]}>{item.title}</Cell>
      </Row>
    );
  }

  renderHeader() {
    return (
      <Header style={{backgroundColor: 'white', borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 1, }} >
        <HeaderCell width={1} textStyle={styles.headerText} text="CODE" />
        <HeaderCell width={3} textStyle={[styles.headerText]} text="NAME" />
      </Header>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Button title="Course Preferences" style={styles.button} onPress={() => { this.props.navigation.navigate('CoursePref',{ selected: this.state.data }) }} /> */}
      	
        <View style={styles.tableContainer}>
          <DataTable
            dataSource={this.state.ds}
            renderRow={this.renderRow}
            renderHeader={this.renderHeader}
            enableEmptySections={true}
          />
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => { this.props.navigation.navigate('AddCourse', { selected: this.state.data }) }}>
          <EvilIcons name={"plus"} size={38} style={{marginLeft: -3,}} />
          <Text style={styles.buttonText}>
            ADD COURSES
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => { this.props.navigation.navigate('TimePref', { freeTimes: this.state.freeTimes }) }}>
          <Image resizeMode={"contain"} style={styles.iconImage} source={require("../assets/3.png")}/>
          <Text style={styles.buttonText}>
            TIME PREFERENCES
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => this._generate()}>
          <Image resizeMode={"contain"} style={styles.iconImage} source={require("../assets/2.png")}/>
          <Text style={styles.buttonText}>
            GENERATE SUCHEDULES
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  button: { 
    width: SCREEN_WIDTH,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems:'center',
    paddingHorizontal: 20,
    borderColor: 'rgba(170,170,170,1)',
    marginTop: 10,
    borderWidth: 0,
    borderRadius: 5,
    alignSelf: 'center'

  }, 
  buttonText: {
    fontWeight:'400',
    fontSize: SCREEN_WIDTH<321? 19:18,
    marginLeft: 10,
  },
  iconImage: {
    height: 30,
    width: 30
  },
  tableContainer: {
    marginTop: 16,
    height: SCREEN_HEIGHT* 0.4,
    marginHorizontal: 16,
    borderWidth: 1,
    backgroundColor: 'rgba(250,250,250,1)',
    borderColor: 'rgba(220,220,220,1)',
    borderRadius: 4,
    overflow: 'hidden'
  },
  headerText: {
    fontSize: 14,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    fontWeight: '700'
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