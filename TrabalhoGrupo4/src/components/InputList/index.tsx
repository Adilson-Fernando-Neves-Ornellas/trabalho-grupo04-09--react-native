import React from 'react';
import { TextInput, View, ViewProps } from 'react-native'

interface InputProps {
    placeholder: string,
    placeholderColor?: string,
    value:string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

interface FormProps extends ViewProps {
    inputs: InputProps[]
}

export const Form = ({inputs, ...rest}: FormProps) => {
    return (
        <View>
            {inputs.map((input) => {
                return (
                    <TextInput placeholder={input.placeholder} placeholderTextColor={input.placeholderColor ? input.placeholderColor : '#D4BF00CC'} onChangeText={(text) => input.setValue(text)} value={input.value}/>
                )
            })}
        </View>
    )
}