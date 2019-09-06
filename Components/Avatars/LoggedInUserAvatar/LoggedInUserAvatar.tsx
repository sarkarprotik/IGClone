import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-elements'

import Data from '../../../data'

const LoggedInUserAvatar = () => {
  return (
    <View style={{ marginHorizontal: 7 }}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 50,
          width: 80,
          height: 80,
          alignSelf: 'center',
          justifyContent: 'center',
          paddingLeft: 3.5,
          borderWidth: 3,
          borderColor: 'lightpink'
        }}
      >
        <Avatar rounded size={67} source={{ uri: Data.loggedInUser.profilePicture.uri }} />
      </View>
      <View>
        <Text style={{ textAlign: 'center' }}>{Data.loggedInUser.name}</Text>
      </View>
    </View>
  )
}

export default LoggedInUserAvatar
