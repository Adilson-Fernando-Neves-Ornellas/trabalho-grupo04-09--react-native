import React, { useState } from "react";
import { View, Modal, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ModalProps {
    isModalVisible: boolean;
    setIsModalVisible(value: boolean): void;
}

export const ModalAssemble = ({isModalVisible, setIsModalVisible, image}: ModalProps) => {
    const [isLoading, SetIsLoading] = useState<boolean>(true)


    return (
        <Modal >
            <View style={styles.containerModal}>
                <Modal 
                    animationType="slide"
                    transparent={false}
                    visible={isModalVisible}
                    onRequestClose={() => {
                        setIsModalVisible(false);
                    }}
                >
                    <View style={styles.modal}>
                        <Image
                            style={styles.image}
                            source={}

                    </View>

                </Modal>

            </View>
        </Modal>
    )
}