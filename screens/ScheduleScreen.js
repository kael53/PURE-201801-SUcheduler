import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Dimensions, BackHandler} from 'react-native';
import { Component }  from 'react' ;
import { DataTable, Header, HeaderCell, Row, Cell } from 'react-native-data-table';
import { ListView } from 'realm/react-native';
import { Feather } from '@expo/vector-icons';
import Dialog from 'react-native-dialog';
import db from '../config/database.js';
import base_url from '../config/api.js';

const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HEIGHT = Dimensions.get("window").height
export default class ScheduleScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Schedule'),
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
        	  onPress={() => { navigation.getParam('save')() }}
      	  >
          <Text style={{fontWeight: '500', fontSize: 18, color: 'rgba(0,123,217,1.0)'}}>
            Save
          </Text>
          </TouchableOpacity>
    	)
    };
  };

  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    });
    schedule = []; for (var i = 0; i < 12; i++) schedule.push({hour:(8+i)+':40 - '+(9+i)+':30', day:Array(5).fill('')});
    this.state = { inputText: "", dialogVisible: false, schedule: schedule, ds: this.ds.cloneWithRows(schedule) };
  };

  _showDialog = () => {
  	if (this.props.navigation.getParam('isSaved', false)) {
  		db.transaction(tx => {
  			tx.executeSql('DELETE FROM "schedules" WHERE name=?', [this.props.navigation.getParam('title', '')])
  		}, (e) => alert('Error', 'Cant delete schedule'), () => { this.props.navigation.goBack(); this.props.navigation.state.params.refresh(); });
  	} else {
  		this.setState({ dialogVisible: true }); 
  	}
  }
  _save = (name, schedule) => {
  	db.transaction(tx => {
      tx.executeSql('INSERT INTO "schedules" VALUES (?, ?)', [name, schedule]);
    }, 
    (e) => { 
    	alert('Error', 'Schedule Name exists!');
    	this.props.navigation.setParams({ isSaved: false });
    } , 
    () => { 
    	this.setState({ dialogVisible: false });
    	this.props.navigation.setParams({ isSaved: true });
    });
  }

  componentWillMount() {
  	this.props.navigation.setParams({ save: this._showDialog });
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    const crns = this.props.navigation.state.params.schedule;
    schedule = []; for (var i = 0; i < 12; i++) schedule.push({hour:(8+i)+':40', day:Array(5).fill('')});

    fetch(base_url+"/courses", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            method: "getSDs",
            crns: crns.split(',').map((item) => parseInt(item))
        })
    })
    .then((response) => response.json())
    .then((responseData) => {
		responseData.sdates.forEach((item) => {
				for (var i = 0; i < (item.end - item.start + 1); i++)
					schedule[item.start + i].day[item.day-1] = item.name+item.type + ' - ' + item.section;
				this.setState({ schedule: schedule, ds: this.ds.cloneWithRows(schedule) });
			});
    })
    .done();

  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    this.props.navigation.goBack();
    return true;
  }

  renderRow(item) {
      return (
        <Row style={styles.rowButton}>
	        <Cell textStyle={styles.rowText} width={1}>{item.hour}</Cell>
          <Cell textStyle={styles.rowText1} numberOfLines={2} width={1}>{item.day[0]}</Cell>
          <Cell textStyle={styles.rowText1} numberOfLines={2} width={1}>{item.day[1]}</Cell>
          <Cell textStyle={styles.rowText1} numberOfLines={2} width={1}>{item.day[2]}</Cell>
          <Cell textStyle={styles.rowText1} numberOfLines={2} width={1}>{item.day[3]}</Cell>
          <Cell textStyle={styles.rowText1} numberOfLines={2} width={1}>{item.day[4]}</Cell>
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
      <View style={styles.container}>
      	<Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title>Save Schedule</Dialog.Title>
          <Dialog.Description>
            Give an unique name to this schedule..
          </Dialog.Description>
          <Dialog.Input onChangeText={ (txt) => this.setState({ inputText: txt }) } />
          <Dialog.Button label="Cancel" onPress={ () => this.setState({ dialogVisible: false })}/>
          <Dialog.Button label="Save" onPress={ () => this._save(this.state.inputText, this.props.navigation.state.params.schedule)}/>
        </Dialog.Container>
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
  container: { flex: 1, backgroundColor: '#fff' },
  headerText: {
    fontSize: 14,
    paddingHorizontal: 3,
    marginLeft: 5,
    paddingTop: 12,
    paddingBottom: 12,
    fontWeight: '700'
  },
  rowText: {
    fontWeight: '600',
    fontSize: SCREEN_WIDTH<321? 14:14,
  }, 
  rowText1: {
    fontWeight: '400',
    fontSize: SCREEN_WIDTH<321? 14:15,
    color: 'rgba(50,50,50,0.8)',
    paddingLeft: 10,
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
    height: 44,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(100,100,100,0.15)',
    backgroundColor: 'white'
  },
});

