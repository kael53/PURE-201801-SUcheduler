import React from 'react';
import { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Row, Cell } from 'react-native-data-table';
import { withNavigation } from 'react-navigation';

class ScheduleRow extends Component {
  render() {
    return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Schedule', { title: this.props.name, schedule: this.props.schedule }) }>
        <Row>
          <Cell width={1}>{this.props.name}</Cell>
          <Cell numberOfLines={2} width={3}>{this.props.schedule}</Cell>
        </Row>
        </TouchableOpacity>
    );
  }
}

export default withNavigation(ScheduleRow);
