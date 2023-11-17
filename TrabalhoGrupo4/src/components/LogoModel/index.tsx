import React, { useEffect, useState } from "react";

import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  Image,
  View,
} from "react-native";
import logoFundo from "../../assets/Images/LogoTeamHeroesSemTexto.png";
import { styles } from "./styles";

interface LogoProps extends TouchableOpacityProps {
  title: string;
  size: number;
}

export const Logo = ({ title, size, ...rest }: LogoProps) => {
  return (
    <TouchableOpacity {...rest}>
      <Image source={logoFundo} style={styles.img} />
      <View style={styles.logoContainer}>
        <Text style={[styles.logoText, { fontSize: size }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
