import { StyleSheet, Platform } from 'react-native'
import Constants from '../../utilities/Constants'

export default StyleSheet.create({
    itembox: {
        backgroundColor: 'transparent',
    },
    labelText: {
        fontSize: Constants.ScreenSize.width * 12 / 375,
        textAlign: 'left',
        fontWeight: '400',
        fontStyle: 'normal',
        color: '#526286',
        lineHeight: Constants.ScreenSize.height * 14.32 / 812,
        marginBottom: Constants.ScreenSize.width * 4 / 375,
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        fontSize: Constants.ScreenSize.width * 16 / 375,
        fontWeight: 'normal',
        fontStyle: 'normal',
        color: '#C3C5CD',
        borderRadius: 5,
        lineHeight: Constants.ScreenSize.height * 19 / 812,

    },
    textInputFocus: {
        backgroundColor: '#F6F7FA',
        fontSize: Constants.ScreenSize.width * 16 / 375,
        fontWeight: 'normal',
        fontStyle: 'normal',
        color: '#203060',
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: 5,
        lineHeight: Constants.ScreenSize.height * 19 / 812,
    },
    labelAccessory: {
        color: '#F5222D'
    },
    textInputtransparent: {
        fontSize: Constants.ScreenSize.width * 16 / 375,
        fontWeight: 'normal',
        fontStyle: 'normal',
        color: '#203060',
        lineHeight: Constants.ScreenSize.height * 19 / 812,
        paddingBottom: 5
    },
    textInputtransparentwithBorder: {
        fontSize: Constants.ScreenSize.width * 15 / 375,
        fontWeight: 'normal',
        fontStyle: 'normal',
        color: '#203060',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgba(0, 0, 0, 0.45)',
        padding: Constants.ScreenSize.width * 5 / 428,
    },
    notEditableTextInputStyle: {
        fontSize: Constants.ScreenSize.width * 16 / 375,
        fontWeight: 'normal',
        fontStyle: 'normal',
        color: '#848484',
        lineHeight: Constants.ScreenSize.height * 19 / 812,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgba(0, 0, 0, 0.45)',
        paddingLeft: Constants.ScreenSize.width * 10 / 375,
    },
    passwordEyeContainer: {
        width: Constants.ScreenSize.width * 30 / 375,
        marginTop: Platform.OS === 'android' ? Constants.ScreenSize.height * 42 / 812 : Constants.ScreenSize.height * 37 / 812,
        right: 10,
        position: 'absolute',
        zIndex: 1,
    },
    passwordEyeIcon: {
        fontSize: Constants.ScreenSize.width * 18 / Constants.baseWidth,
        color: '#909EB1'
    },
    errorText: {
        fontSize: 11,
        color: 'red',
        marginTop: 5,
        paddingLeft: 5
    },
    inputView: {
        marginBottom: Constants.ScreenSize.height * 12 / 812,
    }
})