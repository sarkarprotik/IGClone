import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import InstaCardHeader from '../InstaCard/InstaCardHeader/InstaCardHeader'

export default class MaterialCardWithContent extends Component {
  render() {
    return (
      <View>
        <InstaCardHeader />
        {/* <View style={styles.cardItem1Style}> */}
        {/* <View style={styles.headerStyle}> */}
        {/* <Image source={{ uri: 'http://i.pravatar.cc/150?av' }} style={styles.leftImage} /> */}
        {/* <View style={styles.headerContent}> */}
        {/* <Text style={styles.textStyle}>Title</Text> */}
        {/* <Text style={styles.noteTextStyle}>Subhead</Text> */}
        {/* </View> */}
        {/* </View> */}
        {/* </View> */}
        <Image source={{ uri: 'http://i.pravatar.cc/150?av' }} style={styles.cardItemImagePlace} />
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            BuilderX is a screen design tool which codes React Native for you.
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF',
    flexWrap: 'nowrap',
    elevation: 3,
    borderRadius: 2,
    borderColor: '#CCC',
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: 'hidden'
  },
  cardItem1Style: {
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16
  },
  headerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftImage: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  headerContent: {
    justifyContent: 'center',
    paddingLeft: 16
  },
  textStyle: {
    color: '#000',
    fontSize: 16,
    lineHeight: 20
  },
  noteTextStyle: {
    color: '#000',
    opacity: 0.5,
    fontSize: 14,
    lineHeight: 16
  },
  cardItemImagePlace: {
    flex: 1,
    backgroundColor: '#ccc',
    minHeight: 210
  },
  body: {
    padding: 16
  },
  bodyText: {
    color: '#424242',
    fontSize: 14,
    lineHeight: 20
  }
})
