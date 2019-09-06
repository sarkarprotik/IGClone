import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

const Footer = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: 'lightgrey',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 8,
        justifyContent: 'space-around'
      }}
    >
      <Icon iconStyle={{ borderStartColor: 'blue' }} name={'home'} type="feather" size={27} />
      <Icon name={'search'} type="feather" size={27} />
      <Icon name={'plus-square'} type="feather" size={27} />
      <Icon name={'heart'} type="feather" size={27} />
      <Icon name={'user'} type="feather" size={27} />
    </View>
  )
}

export default Footer
