/*
 * Descrição: Este arquivo contém a implementação do componente CardsTime.
 */

import React, { useState, useContext } from "react";
import { FlatList, View, Image, Text } from "react-native";
import styles from "./styles";
import { api } from "../../api/api";
import superGif from "../../assets/Images/heroload.gif";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { Button } from "../Button";
import { AssembleContext, Heroi } from "../../Context/AssembleContext";
import colors from "../../styles/theme/colors";

/**
 * @function CardsTime
 * Componente funcional que representa a exibição dos heróis no time do usuário.
 * @returns {JSX.Element} - Elemento JSX representando os cards dos heróis.
 */
const CardsTime = () => {
  const { setListaHerois } = useContext(AssembleContext);
  const [listaHeroisTime, setListaHeroisTime] = useState<Heroi[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useFocusEffect(
    React.useCallback(() => {
      getHerois();
    }, [])
  );

  /**
   * Função responsável por obter os heróis do usuário a partir da API.
   */
  const getHerois = async () => {
    const asyncId = await AsyncStorage.getItem("@user_id");
    if (asyncId !== null) {
      const idUsuario = JSON.parse(asyncId);
      try {
        const response = await api.get("/teamHerois", {
          params: { idUsuario: idUsuario },
        });
        setListaHeroisTime(response.data[0].herois);
        setListaHerois(response.data[0].herois);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  /**
   * Função responsável por excluir um herói do time do usuário.
   * @param {number} idHeroi - ID do herói a ser excluído.
   */
  const excluirHeroi = async (idHeroi: number) => {
    const asyncId = await AsyncStorage.getItem("@user_id");
    if (asyncId !== null) {
      const idUsuario = JSON.parse(asyncId);

      const timeHerois = await api.get("/teamHerois", {
        params: { idUsuario: idUsuario },
      });

      const listaHeroisTime = timeHerois.data[0].herois;
      const idTeamHerois = timeHerois.data[0].id;

      const heroiEncontrado = listaHeroisTime.some(
        (heroi: Heroi) => heroi.id === idHeroi
      );

      if (heroiEncontrado) {
        const listaTimeAtualizada = listaHeroisTime.filter(
          (heroi: Heroi) => heroi.id !== idHeroi
        );

        const modeloApi = {
          id: idTeamHerois,
          idUsuario: idUsuario,
          herois: [...listaTimeAtualizada],
        };

        try {
          await api.put(`/teamHerois/${idTeamHerois}`, modeloApi);
          alert("Herói excluído com sucesso!");
          setListaHerois(listaTimeAtualizada);
          setListaHeroisTime(listaTimeAtualizada);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      console.log("Nenhum valor encontrado para @user_id");
    }
  };

  return (
    <View style={styles.containerCards}>
      {isLoading ? (
        <View>
          <Text style={styles.textCard}>CARREGANDO...</Text>
          <Image
            style={{ maxWidth: "100%", maxHeight: "80%" }}
            source={superGif}
          />
        </View>
      ) : listaHeroisTime.length > 0 ? (
        <FlatList
          data={listaHeroisTime}
          contentContainerStyle={{ paddingTop: 20 }}
          numColumns={3}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.card}>
              <Image
                source={{ uri: item.img }}
                style={{ width: "80%", height: 120, resizeMode: "cover" }}
              />
              <View>
                <Text style={[styles.textCard]}>{item.nome}</Text>
                <Button
                  buttonHeight={22}
                  buttonWidth={100}
                  text="Excluir"
                  onPress={() => excluirHeroi(item.id)}
                />
              </View>
            </View>
          )}
        />
      ) : (
        <View style={{ width: "100%", backgroundColor: colors.redBackground }}>
          <Text style={styles.textCardNotFound}>
            Nenhum herói convocado para seu time!
          </Text>
          <Text style={styles.textCardNotFound}>
            Por favor, navegue até a aba "HEROES" e convoque seus heróis!
          </Text>
        </View>
      )}
    </View>
  );
};

export default CardsTime;
