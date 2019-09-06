import React from 'react'
import { View, Text, Image } from 'react-native'
import { Icon, Avatar } from 'react-native-elements'

import styles from './styles'

const InstaCardHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.rect}>
        <View style={styles.image}>
          <Avatar
            key={Math.random()}
            rounded
            size="small"
            source={{
              uri: 'http://i.pravatar.cc/150?av'
            }}
          />
        </View>
        <Text style={styles.text}>UserName</Text>
        <View style={styles.icon}>
          <Icon name={'more-vert'} type="MaterialIcons" size={20} />
        </View>
      </View>
    </View>
  )
}

export default InstaCardHeader
