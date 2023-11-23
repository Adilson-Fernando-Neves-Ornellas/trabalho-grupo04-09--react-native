import React from "react";
import { TextInput, View, ViewProps } from "react-native";
import { styles } from "./styles";
import colors from "../../styles/theme/colors";

interface InputProps {
  placeholder: string;
  placeholderColor?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  secureTextEntry?: boolean;
}
interface InputListProps extends ViewProps {
  inputs: InputProps[];
  limpar: () => void;
}

export const InputList = ({ inputs, ...rest }: InputListProps) => {
  return (
    <View>
      {inputs.map((input) => {
        return (
          <TextInput
            secureTextEntry={input.secureTextEntry}
            key={input.id}
            style={styles.input}
            placeholder={input.placeholder}
            placeholderTextColor={
              input.placeholderColor
                ? input.placeholderColor
                : colors.yellowInput
            }
            onChangeText={(text) => input.setValue(text)}
            value={input.value}
          />
        );
      })}
    </View>
  );
};
