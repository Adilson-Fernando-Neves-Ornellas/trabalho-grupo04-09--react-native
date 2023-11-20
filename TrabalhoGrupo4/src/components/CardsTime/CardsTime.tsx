import { ActivityIndicator, FlatList, View, Image, Text } from "react-native";
import styles from "./styles";
import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import superGif from "../../assets/Images/heroload.gif";

interface Heroi {
  id: number;
  nome: string;
  descrição: string;
  img: string;
  forca: number;
  defesa: number;
}

const CardsTime = () => {
  const [listaHerois, setListaHerois] = useState<Heroi[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function AdicionarHeroi() {}

  const getherois = () => {
    setTimeout(async () => {
      const response = await api.get("/herois");
      setListaHerois(response.data);
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    getherois();
  }, []);

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
