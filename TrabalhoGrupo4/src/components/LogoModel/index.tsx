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
  sizeTxt: number;
  sizeBg: any;
}

export const Logo = ({ sizeBg, title, sizeTxt, ...rest }: LogoProps) => {
  return (
    <View style={styles.img}>
      <TouchableOpacity {...rest}>
        <Image source={logoFundo} style={[styles.img, {height:sizeBg}]} />
        <View style={styles.logoContainer}>
          <Text style={[styles.logoText, { fontSize: sizeTxt }]}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
