import { StyleSheet, Platform } from "react-native"
import colors from "../../styles/theme/colors"
import fonts from "../../styles/theme/fonts"

export const styles = StyleSheet.create({
    containerCards: {
        ...Platform.select({
            android: {
                height: '30%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                rowGap: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10
            },
            ios:{
                height: '30%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                rowGap: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10    
            },
            default:{
                height: '30%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                rowGap: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10
            }
        })
    },
    cardCarrossel: {
        ...Platform.select({
            android: {
                padding: 10,
            },
            ios:{
                padding: 10,
            },
            default:{
                padding: 10,
            }
        })
    },
    card: {
        ...Platform.select({
            android: {
                width: 110,
                height: 200,
                alignItems: 'center'
            },
            ios:{
                width: 110,
                height: 200,
                alignItems: 'center'
            },
            default:{
                width: 110,
                height: 200,
                alignItems: 'center'
            }
        })
    },
    textCard: {
        ...Platform.select({
            android: {
                justifyContent: 'center',
                color: colors.yellowPrimary,
                fontSize: 16,
                fontFamily: fonts.texto
            },
            ios:{
                justifyContent: 'center',
                color: colors.yellowPrimary,
                fontSize: 16,
                fontFamily: fonts.texto
            },
            default:{
                justifyContent: 'center',
                color: colors.yellowPrimary,
                fontSize: 16,
                fontFamily: fonts.texto
            }
        })
    }
})