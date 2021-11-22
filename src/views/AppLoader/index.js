import React, { useState, useEffect } from 'react'
import { View,Text,StyleSheet, Image ,Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from "../../utilities/Constants";

const AppLoader = (props) => {

    useEffect(() => {
        
            updateState(true)
        
    }, []);

    function updateState(authVal) {
        authVal ? routeToMain('user') : routeToMain('auth')
    }

    function routeToMain(type) {
        let route = '';
        switch (type) {
            case 'user':
                route = 'user';
                break;
            default:
                route = 'auth'
                break;
        };
        props.navigation.navigate(route);
    }

    return (
        <View>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/Logo.png')}
                    resizeMode="contain"
                    style={styles.image}
                />
            </View>
            
            <View style={styles.textContainer}>
            <Text style={styles.firstTextStyle}>ANDHRA PRADESH TOWNSHIP AND</Text>
                <Text style={styles.secondTextStyle}>INFRASTRUCTURE DEVELOPMENT CORPORATION LIMITED</Text>
            </View>
            
            <View style={styles.bottomImagecontainer}>
                    <Image
                        source={require('../../assets/images/login_Image.png')}
                        resizeMode="cover"
                        style={styles.image}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   
container: {
    height: (Constants.ScreenSize.height* 102) / 926,
    width: (Constants.ScreenSize.width* 312) / 428,
    marginTop: (Constants.ScreenSize.height* 311) / 926,
    alignItems: "center",
    justifyContent: "center",
    alignSelf:"center",
  },
  bottomImagecontainer: {
    height: (Constants.ScreenSize.height* 367) / 926,
    width: (Constants.ScreenSize.width),
  
  },
  image: {
    height: '100%',
    width: '100%',
    alignSelf:'center'
  },
  textContainer: {
    height: (Constants.ScreenSize.height * 100) / 926,
    width: (Constants.ScreenSize.width * 352)/428,
    marginTop: (Constants.ScreenSize.height * 14) / 926,
    alignSelf:'center',
    alignItems:'center',
  },
  firstTextStyle:{
      fontSize: (Constants.ScreenSize.width * 17) / 428,
      fontStyle: "normal",
      color: "#EF4146",
      textAlign:"center"
  },
  secondTextStyle:{
    fontSize: (Constants.ScreenSize.width * 17) / 428,
    fontStyle: "normal",
    color: "#4274B9",
    textAlign:"center"
  },
})
export default AppLoader;