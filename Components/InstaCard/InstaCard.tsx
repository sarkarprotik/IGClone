import React, { useState } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import InstaCardHeader from './InstaCardHeader/InstaCardHeader'
import InstaCardButtons from './InstaCardButtons/InstaCardButtons'
import InstaCardComments from './InstaCardComments/InstaCardComments'
import { Avatar } from 'react-native-elements'

const InstaCardWriteComments = () => {
  const [screenHeight, setScreenHeight] = useState(0)

  return (
    <>
      <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 5 }}>
        <View>
          <Avatar rounded size={23} source={{ uri: 'http://i.pravatar.cc/150?av' }} />
        </View>
        <Text style={{ fontSize: 12, color: 'grey', alignSelf: 'center', marginLeft: 9 }}>
          Add a comment...
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: '400', fontSize: 13, color: 'grey' }}>46 Minutes ago</Text>
      </View>
    </>
  )
}

const InstaCard = () => {
  return (
    <View style={{ marginVertical: 5 }}>
      <View style={{ marginBottom: 5 }}>
        <InstaCardHeader />
      </View>
      <Image source={{ uri: 'http://i.pravatar.cc/150?av' }} style={styles.cardItemImagePlace} />
      <InstaCardButtons />
      <InstaCardComments />
      <InstaCardWriteComments />
    </View>
  )
}

export default InstaCard

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
  leftImage: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  headerContent: {
    justifyContent: 'center',
    paddingLeft: 16
  },
  cardItemImagePlace: {
    flex: 1,
    backgroundColor: '#ccc',
    minHeight: 470
  }
})
