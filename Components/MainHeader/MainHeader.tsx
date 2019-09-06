import React from 'react'
import { Header, Icon, Image } from 'react-native-elements'
import { View, Text } from 'react-native'

const LeftComponent = () => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <Icon name={'camera'} type="feather" size={27} />
    </View>
  )
}

const RightComponent = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}
    >
      <View style={{ paddingRight: 12, flexDirection: 'row' }}>
        <Icon name={'tv'} type="feather" size={27} />
      </View>
      <Icon name={'send'} type="feather" size={27} />
    </View>
  )
}

const CenterComponent = () => {
  return (
    <Image
      style={{
        aspectRatio: 0.16,
        marginTop: 4,
        resizeMode: 'contain'
      }}
      source={require('../../assets/logo.png')}
    />
  )
}

const MainHeader = () => {
  return (
    <Header
      style={{ justifyContent: 'space-evenly' }}
      backgroundColor="white"
      leftComponent={<LeftComponent />}
      centerComponent={<CenterComponent />}
      rightComponent={<RightComponent />}
      barStyle={'dark-content'}
    />
  )
}

export default MainHeader
