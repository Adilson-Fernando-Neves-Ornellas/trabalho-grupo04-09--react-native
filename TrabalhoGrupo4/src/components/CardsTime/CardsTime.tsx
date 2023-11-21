import { FlatList, View, Image, Text } from "react-native";
import styles from "./styles";
import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import superGif from "../../assets/Images/heroload.gif";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

interface Heroi {
  id: number;
  nome: string;
  descrição: string;
  img: string;
  forca: number;
  defesa: number;
}

const CardsTime = () => {
  useFocusEffect(
    React.useCallback(() => {
      getherois();
    }, [])
  );

  const [listaHerois, setListaHerois] = useState<Heroi[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getherois = async () => {
      const asyncId = await AsyncStorage.getItem("@user_id");
      if (asyncId !== null) {
        const idUsuario = JSON.parse(asyncId);
        const responseListaHerois = await api.get("/teamHerois", {
          params: { idUsuario: idUsuario },
        });
        const listaHerois = responseListaHerois.data[0].herois;
        setListaHerois(listaHerois);
      }
      setIsLoading(false);
  };

  // useEffect(() => {
  //   getherois();
  // }, []);

  return (
    <View style={styles.containerCards}>
      {isLoading ? (
        <View>
          <Text style={styles.textCard}>CARREGANDO...</Text>
          <Image style={{ maxWidth: "100%" }} source={superGif} />
        </View>
      ) : (
        <FlatList
          style={styles.cardCarrosel}
          numColumns={2}
          data={listaHerois}
          renderItem={({ item }) => (
            <View style={styles.div}>
              <Image
                source={{ uri: item.img }}
                style={{ width: 100, height: 150 }}
              />
              <Text style={styles.textCard}>{item.nome}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default CardsTime;
