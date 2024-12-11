import { StyleSheet } from "react-native";
import { ThemeColors } from "../../theme/colors";

const style = StyleSheet.create({
    container: {
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
  });

  export default style;