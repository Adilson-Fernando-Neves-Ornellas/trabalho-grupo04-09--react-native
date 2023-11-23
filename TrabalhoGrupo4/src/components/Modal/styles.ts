import { StyleSheet, Platform } from "react-native";
import colors from "../../styles/theme/colors";

export const styles = StyleSheet.create({
    modal: {
        ...Platform.select({
            android:{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.blackPrimary + '80'
                
            },
            ios:{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.blackPrimary + '80'
                
            },
            default:{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.blackPrimary + '80'
                
            }
        })
    },
    containerModal: {
        ...Platform.select({
            android:{
                backgroundColor: colors.blackPrimary,
                borderRadius: 20,
                padding: '2%',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
                width: '80%',
                maxHeight: '80%'
                
            },
            ios:{
                backgroundColor: colors.blackPrimary,
                borderRadius: 20,
                padding: '2%',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
                width: '80%',
                maxHeight: '80%'
                
            },
            default:{
                backgroundColor: colors.blackPrimary,
                borderRadius: 20,
                padding: '2%',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
                width: '80%',
                maxHeight: '80%'
    
            }
        })
    },
    image: {
        ...Platform.select({
            android:{
    
                resizeMode: 'contain',
                width: '100%',
                height: '100%',
                borderRadius: 20,
                overflow: 'hidden'
            },
            ios:{
                resizeMode: 'contain',
                width: '100%',
                height: '100%',
                borderRadius: 20,
                overflow: 'hidden'
                
            },
            default:{
                resizeMode: 'contain',
                width: '100%',
                height: '100%',
                borderRadius: 20,
                overflow: 'hidden'
    
            }
        })
    }
})
