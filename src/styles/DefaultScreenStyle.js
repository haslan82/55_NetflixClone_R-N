import { StyleSheet } from "react-native";
import { ThemeColors } from "../theme/ThemeColors";

const DefaultScreenStyle=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:ThemeColors.black,
        padding:10,
    },
     detailScreen:{
         flex:1,
         backgroundColor:ThemeColors.black,
     
         
        
     }
})

export  {DefaultScreenStyle};