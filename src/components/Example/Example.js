import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  SectionList,
  TouchableHighlight,
  Slider,
} from 'react-native';

import styles from './styles'

export default class Example extends Component {

  render() {
    const {data} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Screen
        </Text>
        <SectionList style={styles.list}
          sections={data}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}> {section.title} </Text>}
          renderItem={this.renderItem}
          stickySectionHeadersEnabled={false}
        />
      </View>
    );
  }

  renderItem = ({item}) => {
    const {
      key,
      text,
    } = item
    return (
      <Cell title={text}/>
    )
  }
}

const Cell = ({title, onCellPress}) => {
  return (
    <View style={styles.roomItem}>
    <Text style={styles.text}> {title} </Text>
    </View>
  )
}
