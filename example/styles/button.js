import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/colors";

const style = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: 30,
        margin: 10,
      },
      title: {
        color: ThemeColors.white,
        fontSize: 18,
        fontWeight: '500',
      },
  });

  export default style;