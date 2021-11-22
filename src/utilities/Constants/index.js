import { Dimensions } from 'react-native'

const Constants = {
    baseWidth: 428,
    baseheight: 926,
    baseScale: 2,
    ScreenSize: Dimensions.get('window'),
    Colors: {
        primary: '#ccada6',
        secondary: '#980101',
        primaryLight: '#ffffff',
        primaryDark: '#000000',
        white: '#ffffff',
        tabActive: "#21223e",
        tabInactive: "#b6b6b7",

    },
    FontFamily: {

    },
    FontWeight: {
        heavy: 'bold'

    },
    FontSize: {
        superTiny: 9,
        tiny: 11,
        small: 14,
        medium: 15,
        big: 18,
        large: 20,
        xlarge: 30,
    },
    IconDimension: {
        height: 33,
        width: 33
    }
}

export default Constants
