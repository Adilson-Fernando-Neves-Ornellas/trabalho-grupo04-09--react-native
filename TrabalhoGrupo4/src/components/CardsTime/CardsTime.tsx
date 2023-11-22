import { FlatList, View, Image, Text } from "react-native";
import styles from "./styles";
import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import superGif from "../../assets/Images/heroload.gif";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { Button } from "../Button";

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

  const ExcluirHeroi = async (idHeroi: number) => {
    const asyncId = await AsyncStorage.getItem("@user_id");
    if (asyncId !== null) {
      const idUsuario = JSON.parse(asyncId);

      const timeHerois = await api.get("/teamHerois", {
        params: { idUsuario: idUsuario },
      });

      const listaHeroisTime = timeHerois.data[0].herois;
      const idteamHerois = timeHerois.data[0].id;
    
      
      let heroiEncontrado = false;

      listaHeroisTime.forEach((heroi: Heroi) => {
        if (heroi.id === idHeroi) {
           heroiEncontrado = true;
        }
      });

      if (heroiEncontrado) {
        const listaTimeAtualizada = listaHeroisTime.filter((heroi:Heroi)=>heroi.id !== idHeroi)
        const modeloAPi = {
          id: idteamHerois,
          idUsuario: idUsuario,
          herois: [...listaTimeAtualizada],
        };

        try {
          await api.put(`/teamHerois/${idteamHerois}`, modeloAPi);
        } catch (error) {
          alert("Herói excluido com sucesso!");
          setListaHerois(listaTimeAtualizada)
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
          <Image style={{ maxWidth: "100%" }} source={superGif} />
        </View>
      ) : (
        <FlatList
          style={styles.cardCarrosel}
          numColumns={2}
          data={listaHerois}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.div}>
              <Image
                source={{ uri: item.img }}
                style={{ width: 100, height: 150 }}
              />
              <Text style={styles.textCard}>{item.nome}</Text>
              <Button
                  buttonHeight={20}
                  buttonWidth={100}
                  text="Excluir"
                  onPress={() => ExcluirHeroi(item.id)}
                />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default CardsTime;
