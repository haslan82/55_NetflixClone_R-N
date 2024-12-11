import { Add } from 'iconsax-react-native'
import { StyleSheet,TouchableOpacity } from 'react-native'
import { ThemeColors } from '../../theme/colors'




const FloatActionButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
        <Add size={32} color={ThemeColors.black} />
    </TouchableOpacity>
  )
}

export default FloatActionButton

const styles = StyleSheet.create({
    buttoncontainer: {
      position: 'absolute',
      backgroundColor: ThemeColors.green,
      borderRadius: 50,
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 50,
      right: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      
    },
  
})