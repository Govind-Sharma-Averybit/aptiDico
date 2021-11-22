import { StyleSheet } from "react-native";
import Constants from "../../utilities/Constants";

export default StyleSheet.create({
    textStyle: {
            fontSize: (Constants.ScreenSize.width * 25) / 411,
            marginTop: (Constants.ScreenSize.height / 2) - 50,
            fontWeight: "500",
            fontStyle: "normal",
            color: '#000',
            alignSelf:'center'
          
    },
    
})