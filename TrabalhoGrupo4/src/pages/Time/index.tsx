import { View, Text, StatusBar } from "react-native";
import styles from "./styles";
import Header from "../../components/header/header";
import CardsTime from "../../components/CardsTime/CardsTime";
import { Button } from "../../components/Button";
import { useState, useContext } from "react";
import { ModalAssemble } from "../../components/Modal";
import { AssembleContext } from "../../Context/AssembleContext";

const Time = () => {
  const { listaHerois } = useContext(AssembleContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.containerHome}>
      <StatusBar />
      <Header />
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text style={styles.tituloPageHome}>Time Atual</Text>
        <Text style={styles.tituloPageHome}>{listaHerois.length} / 6</Text>
      </View>
      <CardsTime />
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
