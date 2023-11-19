import React from 'react';
import { TextInput, View, ViewProps } from 'react-native'
import { styles } from './styles';

interface InputProps {
    placeholder: string,
    placeholderColor?: string,
    value:string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

interface InputListProps extends ViewProps {
    inputs: InputProps[]
}

export const InputList = ({inputs, ...rest}: InputListProps) => {
    return (
        <View>
            {inputs.map((input) => {
                return (
                    <TextInput style={styles.input} placeholder={input.placeholder} placeholderTextColor={input.placeholderColor ? input.placeholderColor : '#D4BF00CC'} onChangeText={(text) => input.setValue(text)} value={input.value}/>
                )
            })}
        </View>
    )
}