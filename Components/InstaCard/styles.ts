import { StyleSheet, ViewStyle, ImageStyle } from 'react-native'

interface IStyle {
  instagramCard: ViewStyle
  instagramCardHeader: ViewStyle
  instagramCardButtons: ViewStyle
  instagramImage: ImageStyle
  instagramCardTime: ViewStyle
}

const styles = StyleSheet.create<IStyle>({
  instagramCard: {
    backgroundColor: 'red',
    height: 300
  },
  instagramCardHeader: {
    backgroundColor: 'lightblue',
    flexDirection: 'row'
  },
  instagramCardButtons: {
    height: 50,
    backgroundColor: 'green'
  },
  instagramImage: {
    // width: '100%',
    // height: '100%'
  },
  instagramCardTime: {
    width: 80,
    paddingTop: 10,
    textAlign: 'right',
    color: '#999'
  }
})

export default styles
