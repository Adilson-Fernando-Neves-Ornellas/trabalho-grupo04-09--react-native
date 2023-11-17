import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import {styles} from './styles'
interface ButtonProps extends TouchableOpacityProps {
    text: string,
    buttonWidth?: any,
    buttonHeight?: any,
    textFontSize?: any
  }


export const Button = ({text, buttonWidth, buttonHeight, textFontSize, ...rest}: ButtonProps) => {
    return(
        <TouchableOpacity style={[styles.button, {width: buttonWidth, height: buttonHeight}]}>
            <Text style={[styles.text, {fontSize: textFontSize}]}>{text}</Text>
        </TouchableOpacity>
    )
}