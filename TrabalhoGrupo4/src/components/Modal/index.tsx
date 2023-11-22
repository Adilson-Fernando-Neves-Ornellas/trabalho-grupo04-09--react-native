import React, { useState } from "react";
import { View, Modal, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import AssembleImage from '../../assets/Images/assembleGif.gif'
import { AntDesign } from '@expo/vector-icons'; 
import colors from "../../styles/theme/colors";

interface ModalProps {
    isModalVisible: boolean;
    setIsModalVisible(value: boolean): void;
}

export const ModalAssemble = ({isModalVisible, setIsModalVisible,}: ModalProps) => {
    const [isLoading, SetIsLoading] = useState<boolean>(true)


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
                        <TouchableOpacity 
                        onPress={() => { 
                            setIsModalVisible(false);
                        }}>
                            <AntDesign name="close" size={24} color={colors.bluePrimary} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
    )
}