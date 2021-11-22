import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Navigation from "../../navigation";
import Constants from "../../utilities/Constants";

const Buttons = ({ text }) => {
    return (
        <View style={styles.buttonView} >
            <Text style={styles.buttonTextStyle}>
                {text}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        buttonView: {
            height: Constants.ScreenSize.height * 48 / 731,
            width: Constants.ScreenSize.width * 380 / 411,
            justifyContent: 'center',
            borderRadius: 4,
            backgroundColor: '#14B06F',
        },
        buttonTextStyle: {
            fontSize: Constants.ScreenSize.width * 16 / 411,
            textAlign: 'center',
            fontWeight: '400',
            fontStyle: 'normal',
            color: '#FFFFFF',
        },
    }
)
export default Buttons;