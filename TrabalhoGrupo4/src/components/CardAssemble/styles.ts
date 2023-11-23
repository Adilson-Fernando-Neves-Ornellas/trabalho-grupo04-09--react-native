import { StyleSheet } from "react-native"
import colors from "../../styles/theme/colors"
import fonts from "../../styles/theme/fonts"

export const styles = StyleSheet.create({
    containerCards: {
        height: '30%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    cardCarrossel: {
        padding: 10,
    },
    card: {
        width: 110,
        height: 200,
        alignItems: 'center'
    },
    textCard: {
        justifyContent: 'center',
        textAlign: 'center',
        color: colors.yellowPrimary,
        fontSize: 16,
        fontFamily: fonts.texto    
    },
    flat: {
        flex: 1,
        padding: 20,
    }
})