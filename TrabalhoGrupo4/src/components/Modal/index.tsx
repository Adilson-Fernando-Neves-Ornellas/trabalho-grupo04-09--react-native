/*
 * Descrição: Este arquivo contém a implementação do componente de modal para a assembleia do time.
 */

import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  Modal,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import AssembleImage from "../../assets/Images/assembleGif.gif";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../styles/theme/colors";
import { CardAssemble } from "../CardAssemble";
import fonts from "../../styles/theme/fonts";
import { AssembleContext } from "../../Context/AssembleContext";
import { useFocusEffect } from "@react-navigation/native";

/**
 * @interface ModalProps
 * Interface que representa as propriedades do componente ModalAssemble.
 */
interface ModalProps {
  isModalVisible: boolean;
  setIsModalVisible(value: boolean): void;
}

/**
 * @function ModalAssemble
 * Componente funcional que representa o modal para a assembleia do time.
 * @param {ModalProps} props - Propriedades do componente.
 * @returns {JSX.Element} - Elemento JSX representando o modal.
 */
export const ModalAssemble = ({ isModalVisible, setIsModalVisible }: ModalProps) => {
  const [forcaTotal, setForcaTotal] = useState<number>(0);
  const [defesaTotal, setDefesaTotal] = useState<number>(0);
  const { listaHerois } = useContext(AssembleContext);

  /**
   * @function somaDados
   * Função responsável por calcular a força total e defesa total do time.
   */
  function somaDados() {
    let forcas: number = 0;
    let defesas: number = 0;
    listaHerois.forEach((heroi) => {
      forcas += heroi.forca;
      defesas += heroi.defesa;
    });
    setForcaTotal(forcas);
    setDefesaTotal(defesas);
  }

  // Utilizando o hook useFocusEffect para chamar a função somaDados quando a tela estiver em foco
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
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontFamily: fonts.texto, color: colors.yellowInput }}>
            Força da equipe: {forcaTotal}
          </Text>
          <Text style={{ fontFamily: fonts.texto, color: colors.yellowInput }}>
            Defesa da equipe: {defesaTotal}
          </Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

