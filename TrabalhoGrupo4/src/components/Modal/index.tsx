import { Text, Modal, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import AssembleImage from "../../assets/Images/assembleGif.gif";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../styles/theme/colors";
import { CardAssemble } from "../CardAssemble";
import fonts from "../../styles/theme/fonts";
import React, { useContext, useEffect, useState } from "react";
import { AssembleContext, Heroi } from "../../Context/AssembleContext";
import { useFocusEffect } from "@react-navigation/native";

interface ModalProps {
  isModalVisible: boolean;
  setIsModalVisible(value: boolean): void;
}

export const ModalAssemble = ({
  isModalVisible,
  setIsModalVisible,
}: ModalProps) => {
  const [forcaTotal, setForcaTotal] = useState<number>(0);
  const [defesaTotal, setDefesaTotal] = useState<number>(0);
  const { listaHerois } = useContext(AssembleContext);

  function somaDados() {
    let forcas: number = 0;
    let defesas: number = 0;
    listaHerois.forEach((Heroi) => {
      forcas = forcas + Heroi.forca;
      defesas = defesas + Heroi.defesa;
    });
    setForcaTotal(forcas);
    setDefesaTotal(defesas);
  }

  useFocusEffect(
    React.useCallback(() => {
      somaDados();
    }, [])
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(false);
      }}
    >
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => {
          setIsModalVisible(false);
        }}
        style={styles.modal}
      >
        <TouchableOpacity activeOpacity={1} style={styles.containerModal}>
          <TouchableOpacity
            style={{ flexDirection: "column" }}
            onPress={() => {
              setIsModalVisible(false);
            }}
          >
            <AntDesign
              name="close"
              size={24}
              color={colors.yellowPrimary}
              style={{ marginLeft: "90%" }}
            />
          </TouchableOpacity>
          <CardAssemble />
          <Image style={styles.image} source={AssembleImage} />
        </TouchableOpacity>
        <Text style={{textAlign:'center', width:'100%', fontFamily: fonts.texto, color: colors.yellowInput }}>
          Força da equipe: {forcaTotal}
        </Text>
        <Text style={{textAlign:'center', width:'100%', fontFamily: fonts.texto, color: colors.yellowInput }}>
          Defesa da equipe: {defesaTotal}
        </Text>
      </TouchableOpacity>
    </Modal>
  );
};
