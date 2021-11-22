import { StyleSheet } from "react-native";
import Constants from "../../utilities/Constants";

export default StyleSheet.create({
  logoContainer: {
    height: (Constants.ScreenSize.height * 80) / 926,
    width: (Constants.ScreenSize.width * 246) / 428,
    marginTop: (Constants.ScreenSize.height * 131) / 926,
    alignSelf:'center'
  },
  firstInputContainer: {
    width: (Constants.ScreenSize.width * 320) / Constants.baseWidth,
    height: (Constants.ScreenSize.height * 47) / Constants.baseheight,
    alignSelf:"center"
  },
  secondInputContainer: {
    width: (Constants.ScreenSize.width * 320) / Constants.baseWidth,
    height: (Constants.ScreenSize.height * 47) / Constants.baseheight,
    marginTop: (Constants.ScreenSize.height * 26) / 926,
    alignSelf:"center",
  },
  spinner: {
    position: 'absolute',
    zIndex: 50,
    elevation: 50,
    marginTop: Constants.ScreenSize.height / 2,
    marginLeft: Constants.ScreenSize.width / 2,
  },
  topViewStyle: {
    height: (Constants.ScreenSize.height * 25) / 731,
    width: Constants.ScreenSize.width,
    backgroundColor: "#0C6F46",
  },
  textStyle: {
    fontSize: (Constants.ScreenSize.width * 16) / 428,
    marginTop: (Constants.ScreenSize.height * 43) / 926,
    textAlign: "left",
    fontWeight: "400",
    fontStyle: "normal",
    alignSelf: "center",
    color: "#000000",
    textDecorationLine: "underline",
  },
  buttonContainer: {
    marginTop: (Constants.ScreenSize.height * 20.5) / 731,
    alignItems: "center",
  },
  phoneTextStyle: {
    fontSize: (Constants.ScreenSize.width * 27) / 428,
    marginTop: (Constants.ScreenSize.height * 64) / 926,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#000000",
    alignSelf:'center'
  },
  loginButtonStyle:{
    padding: (Constants.ScreenSize.width *30) / Constants.baseWidth,
    height: (Constants.ScreenSize.height * 44) / Constants.baseheight,
    marginTop: (Constants.ScreenSize.height * 60) / 926,
    alignSelf:"center",
    backgroundColor:'#4274B9',
    borderRadius:10
  },
  loginTextStyle: {
    fontSize: (Constants.ScreenSize.width * 16) / 428,
    fontStyle: "normal",
    color: "#FFFFFF",
  },
  bottomImageContainer: {
    height: (Constants.ScreenSize.height* 367) / 926,
    width: (Constants.ScreenSize.width),
    backgroundColor:"lime"
  },
  image: {
      height: '100%',
      width: '100%',
      alignSelf:'center'
  }
});
