import { Add } from 'iconsax-react-native'
import { StyleSheet,TouchableOpacity } from 'react-native'
import { ThemeColors } from '../../theme/colors'
import style from '../../styles/floatActionButton'




const FloatActionButton = (props) => {
  return (
    <TouchableOpacity {...props} style={style.container}>
        <Add size={32} color={ThemeColors.black} />
    </TouchableOpacity>
  )
}

export default FloatActionButton

