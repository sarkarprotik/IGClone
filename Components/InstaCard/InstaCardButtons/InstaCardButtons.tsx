import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './styles'

const InstaCardButtons = () => {
  return (
    <View style={styles.root}>
      <View style={styles.rect}>
        <Icon name={'heart'} type="feather" size={25} />
        <Icon name={'message-circle'} type="feather" size={25} />
        <Icon name={'send'} type="feather" size={25} />
      </View>
      <View style={styles.icon}>
        <Icon name={'bookmark'} type="feather" size={25} />
      </View>
    </View>
  )
}
export default InstaCardButtons
