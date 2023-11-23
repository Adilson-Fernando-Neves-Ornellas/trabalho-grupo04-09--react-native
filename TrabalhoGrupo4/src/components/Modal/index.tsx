import { View, Modal, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import AssembleImage from "../../assets/Images/assembleGif.gif";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../styles/theme/colors";
import { CardAssemble } from "../CardAssemble";

interface ModalProps {
  isModalVisible: boolean;
  setIsModalVisible(value: boolean): void;
}

export const ModalAssemble = ({
  isModalVisible,
  setIsModalVisible,
}: ModalProps) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(false);
      }}
    >
        <View style={styles.modal}>
            <View style={styles.containerModal}>
            <TouchableOpacity
                style={{flexDirection: 'column'}}
                onPress={() => {
                setIsModalVisible(false);
              }}
              >
                <AntDesign name="close" size={32} color={colors.yellowPrimary} style={{marginLeft: '90%'}} />
            </TouchableOpacity>
            <CardAssemble/>
            <Image style={styles.image} source={AssembleImage} />
            </View>
        </View>
      
    </Modal>
  );
};
