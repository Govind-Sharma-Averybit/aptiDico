import React, { useState} from "react";
import { Container, Content,Button} from "native-base";
import { InputText,Buttons } from "../../components";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { CommonActions } from "@react-navigation/routers";
import styles from "./style";


const Login = (props) => {

  function bottomTab (){
    props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "AppLoader" }],
      })
    );
  }
  
  return (
    <Container>
      <Content bounces={false} >
        <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            style={{ height: "100%", width: "100%" }}
            source={require("../../assets/images/Logo.png")}
          />
        </View>
        <Text style={styles.phoneTextStyle}>Login</Text>

        <View style={styles.firstInputContainer}>
           <InputText
            focus={true}
            placeholder={'Enter email id'}
            transparentBackgroundwithBorder={true}
           />
        </View>

        <View style={styles.secondInputContainer}>
           <InputText
            onFocus={true}
            placeholder={'Enter password'}
            transparentBackgroundwithBorder={true}
           />
        </View>
      
        <Button  style={styles.loginButtonStyle} onPress={()=>bottomTab()}>
            <Text style={styles.loginTextStyle}>Login</Text>
        </Button>

        <TouchableOpacity>
          <Text style={styles.textStyle}>Forgot Password</Text>
        </TouchableOpacity>

        <View style={styles.bottomImageContainer}>
                <Image
                    source={require('../../assets/images/login_Image.png')}
                    resizeMode="cover"
                    style={styles.image}
                />
            </View>
      </Content>
    </Container>
  );
};
export default Login;
