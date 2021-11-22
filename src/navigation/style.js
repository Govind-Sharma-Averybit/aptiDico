import { StyleSheet, Platform } from "react-native";
import Constants from "../utilities/Constants";

export default StyleSheet.create({
  tabBarFocusIcon: {
    width: (Constants.ScreenSize.width * 28) / 428,
    height: (Constants.ScreenSize.height * 28) / 926,
  },
  tabBarIcon: {
    opacity: 0.25,
    width: (Constants.ScreenSize.width * 28) / 428,
    height: (Constants.ScreenSize.height * 28) / 926,
  },
  tabBarOptions: {
    height: (Constants.ScreenSize.height * 200) / 926,
    borderRadius:15
  },
});
