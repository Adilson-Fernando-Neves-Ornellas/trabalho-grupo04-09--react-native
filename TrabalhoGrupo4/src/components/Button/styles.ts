import { StyleSheet } from 'react-native'
import colors from '../../styles/theme/colors'
import fonts from '../../styles/theme/fonts'

export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.bluePrimary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
    },
    text: {
        color: colors.yellowPrimary,
        fontFamily: fonts.texto,
        fontSize: 16,
    }
})