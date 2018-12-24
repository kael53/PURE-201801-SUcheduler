import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Picker,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';
import RNPickerSelect from 'react-native-picker-select';
import { MonoText } from '../components/StyledText';
import { Dropdown } from 'react-native-material-dropdown';




const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff' }, //padding --> yanlardaki bosluk, padding top ==> ustteki bosluk
  head: { height: 32, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 2, backgroundColor: '#f6f1fa' },
  row: { height: 32 },
  text: { textAlign: 'center' }
});




export default class GenerateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { props };
  }
  static navigationOptions = {
    header: null,
  };

 clickme = () => {
    var data = this.state.PickerValue;
    if (data == "") {
      alert("Please Select a Option");
    } else {
      alert(data);
      this._navigateTo('TimePref');
    }

  }

_navigateTo = (routeName: string) => {
  this.props.navigation.navigate(routeName);
};
  render() {
    const state = this.state;

    let dataLECTURE = [
      { value: 'ANTH', },
      { value: 'BİO', },                      // it was not shown //
      { value: 'CS', },
      { value: "HUM", },
      { value: 'İE', },
      { value: 'MATH', },
      { value: 'ME', },
    ];

    let dataNUMBER = [

      { value: '101', },
      { value: '102', },                      // shown in label 2 //
      { value: '201', },
      { value: '203', },
      { value: "204", },
      { value: '301', },
      { value: '305', },
    ];

    return (

      <View style={styles.container}>

        <Dropdown
          label='LECTURE'             // Label 1 in expo project it was not shown //
          data={dataLECTURE}
        />
        <Dropdown 
          label='Course Number'       // Label 2 in expo project it was not shown //
          data={dataNUMBER}
        />

 <Button title="Time Preferences" onPress={this.clickme} />

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          </View>
        </ScrollView>
      </View>
    );


  } //render closed expectation  : ! Please Dont change * GBoss *

} //export   closed expectation : ! Please Dont change * GBoss *