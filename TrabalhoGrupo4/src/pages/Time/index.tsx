/*
 * Descrição: Este arquivo contém a implementação da tela que exibe o time atual do usuário.
 */

import React, { useState, useContext } from "react";
import { View, Text, StatusBar } from "react-native";
import styles from "./styles";
import Header from "../../components/header/header";
import CardsTime from "../../components/CardsTime/CardsTime";
import { Button } from "../../components/Button";
import { ModalAssemble } from "../../components/Modal";
import { AssembleContext } from "../../Context/AssembleContext";

/**
 * @function Time
 * Componente funcional que representa a tela do time atual do usuário.
 * @returns {JSX.Element} - Elemento JSX representando a tela.
 */
const Time = () => {
  const { listaHerois } = useContext(AssembleContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.containerHome}>
      {/* Barra de status */}
      <StatusBar />

      {/* Componente de cabeçalho da tela */}
      <Header />

      {/* Área que exibe o título da página e a contagem de heróis no time */}
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text style={styles.tituloPageHome}>Time Atual</Text>
        <Text style={styles.tituloPageHome}>{listaHerois.length} / 6</Text>
      </View>

      {/* Componente que exibe os cards dos heróis no time */}
      <CardsTime />

      {/* Área com botão para acionar o modal de assemble */}
      <View style={styles.buttonAssemble}>
        <Button
          text="Assemble!"
          buttonWidth={200}
          buttonHeight={60}
          textFontSize={36}
          onPress={() => {
            setIsModalVisible(true);
          }}
        />
      </View>

      {/* Modal de assemble, exibido quando o botão é pressionado */}
      {isModalVisible && (
        <ModalAssemble
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </View>
  );
};

export default Time;

