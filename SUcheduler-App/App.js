import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

export default class App extends React.Component {
  onPressInitiate = () => {
    alert("Initiating..");
  };
  onPressPreviouslyInitiated = () => {
    alert("Previously Initiating..");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>SUcheduler</Text>
	<Button
		onPress={this.onPressInitiate}
  		title="Initiate!"
  		color="#5f9ea0"
  		accessibilityLabel="Initiate a journey to generate your new schedule!"
	/>
	<Button
		onPress={this.onPressPreviouslyInitiated}
  		title="Previously Initiated!"
  		color="#8b008b"
  		accessibilityLabel="Previously Initiated journeys to generate your previously-new schedules!"
	/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
