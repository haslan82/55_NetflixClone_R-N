import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/colors";

const style = StyleSheet.create({
    container: {
        margin: 0,
      },
      title: {
        fontSize: 18,
        fontWeight: '500',
        color: ThemeColors.black,
        marginTop: 10,
        marginBottom: 3,
      },
      input: {
        padding: 10,
        borderWidth: 1,
        borderColor: ThemeColors.gray,
        borderRadius: 8,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: '500',
        backgroundColor: ThemeColors.input,
        borderRadius: 5,
        paddingVertical: 15,
      },
  });

  export default style;



