import * as React from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "../utilities/Constants";
import { BottomSheet } from "../components";
import { Icon } from "native-base";
import styles from "./style";

//import screens
import Login from "../views/Login";
import AppLoader from "../views/AppLoader";
import Beneficiaries from "../views/Beneficiaries";
import Dashboard from "../views/Dashboard";
import Finance from "../views/Finance";
import Profile from "../views/Profile";
import Reports from "../views/Reports";
import Benificiaries from "../views/Beneficiaries";


const isSmallScreen = Constants.ScreenSize.height < Constants.baseheight;

console.log('navigation height',Constants.ScreenSize.height)
console.log('navigation base height',Constants.baseheight)
console.log('navigation isSmallScreen',isSmallScreen)

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const NullScreenComponent = () => {
  return null;
};

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName={"Login"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        style: styles.tabBarOptions,
        activeTintColor: "#1CBD99",
        keyboardHidesTabBar: true,
        screenOptions: {
          height:
            (Constants.ScreenSize.height * 100) /926
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Image
                style={styles.tabBarFocusIcon}
                source={require("../assets/images/dashboard.png")}
                resizeMode="contain"
              />
            ) : (
              <Image
                style={styles.tabBarIcon}
                source={require("../assets/images/dashboard.png")}
                resizeMode="contain"
              />
            ),
        })}
      />
      <Tab.Screen
        name="Beneficiaries"
        component={Benificiaries}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Image
                style={styles.tabBarFocusIcon}
                source={require("../assets/images/Beneficiaries.png")}
                resizeMode="contain"
              />
            ) : (
              <Image
                style={styles.tabBarIcon}
                source={require("../assets/images/Beneficiaries.png")}
                resizeMode="contain"
              />
            ),
        }}
      />

      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Image
                style={styles.tabBarFocusIcon}
                source={require("../assets/images/graph.png")}
                resizeMode="contain"
              />
            ) : (
              <Image
                style={styles.tabBarIcon}
                source={require("../assets/images/graph.png")}
                resizeMode="contain"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Finance"
        component={Finance}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Image
                style={styles.tabBarFocusIcon}
                source={require("../assets/images/Finance.png")}
                resizeMode="contain"
              />
            ) : (
              <Image
                style={styles.tabBarIcon}
                source={require("../assets/images/Finance.png")}
                resizeMode="contain"
              />
            ),
        }}
      />

      <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarIcon: ({ focused, color, size }) =>
                  focused ? (
                    <Image
                      style={styles.tabBarFocusIcon}
                      source={require("../assets/images/Profile.png")}
                      resizeMode="contain"
                    />
                  ) : (
                    <Image
                      style={styles.tabBarIcon}
                      source={require("../assets/images/Profile.png")}
                      resizeMode="contain"
                    />
                  ),
              }}
            />
          </Tab.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName={"Dashboard"}
      screenOptions={{ headerShown: false }}
      presentation={"modal"}
    >
      <Stack.Screen name="Dashboard" component={HomeTabs} />
      <Stack.Screen name="Beneficiaries" component={Beneficiaries} />
      <Stack.Screen name="Reports" component={Reports} />
      <Stack.Screen name="Finance" component={Finance} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
export default function Navigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppLoader"
        screenOptions={{ headerShown: false }}
        presentation={"modal"}
      >
        <Stack.Screen name="AppLoader" component={AppLoader} />
        <Stack.Screen name="auth" component={AuthStack} />
        <Stack.Screen name="user" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
