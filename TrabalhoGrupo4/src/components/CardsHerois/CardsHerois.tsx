import { FlatList, View, Image, Text, Button } from "react-native";
import styles from "./styles";
import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import colors from "../../styles/theme/colors";
import superGif from "../../assets/Images/heroload.gif";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Heroi {
  id: number;
  nome: string;
  descrição: string;
  img: string;
  forca: number;
  defesa: number;
}

const CardHerois = () => {
  const [listaHerois, setListaHerois] = useState<Heroi[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const AdicionarHeroi = async (idHeroi : number) => {
    console.log(idHeroi)
    const asyncId =await AsyncStorage.getItem('@user_id')
    if (asyncId !== null) {
      const idUsuario = JSON.parse(asyncId);
      console.log(idUsuario);
    } else {
      console.log('Nenhum valor encontrado para @user_id');
    }
  }

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
          data={listaHerois}
          renderItem={({ item }) => (
            <View style={styles.div}>
              <Image
                source={{ uri: item.img }}
                style={{ width: 100, height: 150 }}
              />
              <View style={styles.infoCard}>
                <Text style={[styles.textCard, { marginTop: 8 }]}>
                  {item.nome}
                </Text>
                <Text style={styles.textCard}> Força: {item.forca}</Text>
                <Text style={styles.textCard}> Defesa: {item.defesa}</Text>
                <Button
                  color={colors.bluePrimary}
                  title="Adicionar"
                  onPress={() => AdicionarHeroi(item.id)}
                />
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default CardHerois;
