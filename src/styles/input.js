import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/ThemeColors";
import { height, width } from "../utils/Constant";


const style = StyleSheet.create({
    container: {
        margin: 0,
      

       
      },
      title: {
        fontSize: 25,
      
        color: ThemeColors.white,
        marginTop: 10,
        marginBottom: 3,
     
      },
      input: {
        height:width*0.3,
        padding: 10,
        borderWidth: 1,
        borderColor: ThemeColors.gray,
     
        
        marginBottom: height*0.01,
        fontSize: 22,
    
        backgroundColor: ThemeColors.gray,
        borderRadius: 15,
        paddingVertical: 15,
        color:ThemeColors.white
      },
  });

  export default style;



