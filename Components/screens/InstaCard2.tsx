import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import MaterialCardWithContent from '../symbols/MaterialCardWithContent'

export default class InstaCard2 extends Component {
  render() {
    return (
      <View style={styles.root}>
        <MaterialCardWithContent style={styles.materialCardWithContent} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    borderColor: '#000000',
    borderWidth: 0
  },
  materialCardWithContent: {
    top: 145.88,
    left: 0,
    width: 375,
    height: 352,
    position: 'absolute',
    shadowOpacity: 0.01
  }
})
