import { StyleSheet, ViewStyle, TextStyle, Dimensions } from 'react-native'
import { ImageStyle } from 'material-ui/svg-icons'

const { width } = Dimensions.get('screen')

interface IStyle {
  root: ViewStyle
  rect: ViewStyle
  text: TextStyle
  icon: ImageStyle
  image: ImageStyle
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row'
  },
  rect: {
    flexDirection: 'row',
    width: '100%'
  },
  text: {
    color: '#121212',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 20
  },
  icon: {
    marginLeft: width * 0.6,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  image: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: width * 0.02
  }
})

export default styles
