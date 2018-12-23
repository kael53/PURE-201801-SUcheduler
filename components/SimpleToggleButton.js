import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
} from 'react-native'


export default class STB extends React.Component {

	state = {
		toggle: false
	}

	_onPress() {
		const newState = !this.state.toggle;
		this.setState({ toggle: newState })

	}

	render() {
		const { toggle } = this.state;
		const textValue = toggle ? "Free\nTime" : "\t\n\t";
		const buttonBg = toggle ? "dodgerblue" : 'whitesmoke';
		const textColor = toggle ? "white" : 'black';
		return (
			<View style = {{ flexDirection:'row', backgroundColor: buttonBg}}>
				<TouchableOpacity
					onPress={() => this._onPress()}
					style={{ flexGrow:1, borderColor:buttonBg ,backgroundColor: buttonBg}}>
					<Text style={{  color: textColor, textAlign: 'center' }}>{textValue}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		borderColor:'dodgerblue',
		backgroundColor: 'whitesmoke',
	},
});