/*
 * Descrição: Este arquivo contém a implementação do componente InputList.
 */

import React from "react";
import { TextInput, View, ViewProps } from "react-native";
import { styles } from "./styles";
import colors from "../../styles/theme/colors";

/**
 * @interface InputProps
 * Interface que representa as propriedades de cada entrada de texto do componente InputList.
 */
interface InputProps {
  placeholder: string;
  placeholderColor?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  secureTextEntry?: boolean;
}

/**
 * @interface InputListProps
 * Interface que representa as propriedades do componente InputList.
 */
interface InputListProps extends ViewProps {
  inputs: InputProps[];
  limpar: () => void;
}

/**
 * @function InputList
 * Componente funcional que representa uma lista de entradas de texto.
 * @param {InputListProps} props - Propriedades do componente.
 * @returns {JSX.Element} - Elemento JSX representando a lista de entradas de texto.
 */
export const InputList = ({ inputs, ...rest }: InputListProps) => {
  return (
    <View {...rest}>
      {inputs.map((input) => (
        <TextInput
          secureTextEntry={input.secureTextEntry}
          key={input.id}
          style={styles.input}
          placeholder={input.placeholder}
          placeholderTextColor={
            input.placeholderColor ? input.placeholderColor : colors.yellowInput
          }
          onChangeText={(text) => input.setValue(text)}
          value={input.value}
        />
      ))}
    </View>
  );
};

