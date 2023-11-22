import React, { useState, useContext } from "react";
import { Text, View, Modal, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import AssembleImage from '../../assets/Images/assembleGif.gif'
import { AntDesign } from '@expo/vector-icons'; 
import colors from "../../styles/theme/colors";
import { AssembleContext } from "../../Context/AssembleContext";

interface ModalProps {
    isModalVisible: boolean;
    setIsModalVisible(value: boolean): void;
}

export const ModalAssemble = ({isModalVisible, setIsModalVisible,}: ModalProps) => {
    const [isLoading, SetIsLoading] = useState<boolean>(true)
    const { listaHerois } = useContext(AssembleContext);


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
                        <Image
                            style={styles.image}
                            source={AssembleImage}
                        />
                        <Text>{}</Text>
                        <TouchableOpacity 
                        onPress={() => { 
                            setIsModalVisible(false);
                            console.log(listaHerois)
                        }}>
                            <AntDesign name="close" size={24} color={colors.bluePrimary} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
    )
}