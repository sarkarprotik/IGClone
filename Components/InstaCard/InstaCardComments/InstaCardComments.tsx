import React from 'react'
import { View, Text } from 'react-native'

import Data from '../../../data'

const InstaCardComments = () => {
  return (
    <View style={{ marginLeft: 5, marginTop: 10 }}>
      <View>
        <Text style={{ fontWeight: '600', fontSize: 14 }}>332 likes</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: '600', fontSize: 13 }}>{Data.userData[1].name}</Text>
        <View>
          <Text> Thats a nice photo</Text>
        </View>
      </View>

      <View>
        <Text style={{ fontWeight: '400', fontSize: 13, color: 'grey' }}>View all 11 comments</Text>
      </View>
    </View>
  )
}

export default InstaCardComments
