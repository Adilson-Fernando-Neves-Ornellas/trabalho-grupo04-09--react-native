import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
interface ButtonProps extends TouchableOpacityProps {
  text: string;
  buttonWidth?: any;
  buttonHeight?: any;
  textFontSize?: any;
  onPress?: (e: any) => Promise<void>;
}

export const Button = ({
  text,
  buttonWidth,
  buttonHeight,
  textFontSize,
  onPress,
  ...rest
}: ButtonProps) => {
  return (
      <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { width: buttonWidth, height: buttonHeight }]}
      {...rest}
    >
      <Text style={[styles.text, { fontSize: textFontSize }]}>{text}</Text>
    </TouchableOpacity>
  );
};
