import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-elements'
import Data from '../data'

const LiveAvatars = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {Data.userData.map(DATA => (
        <View key={Math.random()} style={{ marginHorizontal: 7, borderRadius: 45 }}>
          <View
            style={{
              backgroundColor: 'lightorange',
              borderRadius: 50,
              width: 80,
              height: 80,
              alignSelf: 'center',
              justifyContent: 'center',
              paddingLeft: 4.5,
              borderWidth: 2,
              borderColor: 'orange'
            }}
          >
            <Avatar
              key={Math.random()}
              rounded
              size={67}
              source={{
                uri: DATA.profilePicture.uri
              }}
            />
          </View>

          <View style={{ alignContent: 'center', justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center' }}>{DATA.name}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

export default LiveAvatars
