import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import styles from "./styles";
import Header from "../../components/header/header";
import CardsTime from "../../components/CardsTime/CardsTime";
import { Button } from "../../components/Button";
import { useState } from "react";
import { ModalAssemble } from "../../components/Modal";

const Time = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={styles.containerHome}>
      <StatusBar/>
      <Header />
      <Text style={styles.tituloPageHome}>Time Atual</Text>
      <CardsTime />
      <View style={styles.buttonAssemble}>
      <Button text='Assemble!' buttonWidth={200} buttonHeight={60} textFontSize={36} onPress={() => {setIsModalVisible(true)}}/>
      </View>
      {isModalVisible && <ModalAssemble isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>}
    </View>
  );
};

export default Time;
