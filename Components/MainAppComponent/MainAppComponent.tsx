import React from 'react'
import { View, ScrollView } from 'react-native'
import { Header } from 'react-native-elements'
import MyCustomCenterComponent from '../MyCustomCenterComponent'
import LiveAvatars from '../LiveAvatars'
import InstaCard from '../InstaCard'
import Footer from '../Footer/Footer'

import styles from './styles'
import LoggedInUserAvatar from '../Avatars/LoggedInUserAvatar/LoggedInUserAvatar'
import Container from '../Common/Container'
import InstaCard2 from '../screens/InstaCard2'
import MaterialCardWithContent from '../symbols/MaterialCardWithContent'
import MainHeader from '../MainHeader/MainHeader'

const MainAppComponent = () => {
  return (
    <Container>
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgrey', marginBottom: 5 }}>
        <MainHeader />
      </View>
      <ScrollView>
        <ScrollView horizontal={true}>
          <View style={styles.container}>
            <LoggedInUserAvatar />
            <LiveAvatars />
          </View>
        </ScrollView>
        <InstaCard />
        <InstaCard />
        <InstaCard />
        <InstaCard />
        <InstaCard />
        <InstaCard />
        <InstaCard />
      </ScrollView>
      <Footer />
    </Container>
  )
}

export default MainAppComponent
