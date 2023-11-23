import { FlatList, View, Image, Text } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
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

const CardHerois = () => {
  const [listaHerois, setListaHerois] = useState<Heroi[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const AdicionarHeroi = async (idHeroi: number) => {
    const asyncId = await AsyncStorage.getItem("@user_id");
    if (asyncId !== null) {
      const idUsuario = JSON.parse(asyncId);

      const timeHerois = await api.get("/teamHerois", {
        params: { idUsuario: idUsuario },
      });

      const listaHeroisTime = timeHerois.data[0].herois;
      const idteamHerois = timeHerois.data[0].id;

      const heroiResponse = await api.get(`/herois/${idHeroi}`);
      const heroi = heroiResponse.data;

      const modeloAPi = {
        id: idteamHerois,
        idUsuario: idUsuario,
        herois: [...listaHeroisTime, heroi],
      };
      console.log(listaHeroisTime)

      let heroiEncontrado = false;

      listaHeroisTime.forEach((heroi: Heroi) => {
        if (heroi.id === idHeroi) {
          alert("Esse herói já foi adicionado");
          heroiEncontrado = true;
        }
      });

      if (heroiEncontrado === false) {
        if (listaHeroisTime.length >= 6) {
          alert("Você só pode adicionar até cinco heróis no seu time")
        } else{
          alert("Herói adicionado com sucesso!");
          await api.put(`/teamHerois/${idteamHerois}`, modeloAPi);
        }
      }
    } else {
      console.log("Nenhum valor encontrado para @user_id");
    }
  };

  const adiconandoListaHeroisVaziaAoUsuarioNovo = async () => {
    const asyncId = await AsyncStorage.getItem("@user_id");
    if (asyncId !== null) {
      const idUsuario = JSON.parse(asyncId);

      const conferindoSeExisteTimeParaEsseIdUsuario = await api.get(
        "/teamHerois",
        { params: { idUsuario: idUsuario } }
      );

      if (conferindoSeExisteTimeParaEsseIdUsuario.data[0] == undefined) {
        await api.post("/teamHerois", { idUsuario: idUsuario, herois: [] });
      }
    }
  };

  const getherois = () => {
    setTimeout(async () => {
      const response = await api.get("/herois");
      setListaHerois(response.data);
      setIsLoading(false);
    }, 3000);
  };

  useFocusEffect(
    React.useCallback(() => {
      getherois();
      adiconandoListaHeroisVaziaAoUsuarioNovo();
    }, [])
  );

  return (
    <View style={styles.containerCards}>
      {isLoading ? (
        <View>
          <Text style={styles.textCard}> CARREGANDO...</Text>
          <Image style={{ maxWidth: "100%", maxHeight: '75%' }} source={superGif} />
        </View>
      ) : (
        <FlatList
          style={styles.cardCarrosel}
          data={listaHerois}
          contentContainerStyle={{alignItems: 'center'}}
          renderItem={({ item }) => (
            <>
            <View key={item.id} style={styles.div}>
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
                <Text style={styles.textCardDescription}>
                  {item.descrição}
                </Text>
              </View>
            </View>
            <View style={{alignItems:'center', paddingBottom: 16}}>
              <Button
                buttonHeight={28}
                buttonWidth={195}
                text="Adicionar"
                onPress={() => AdicionarHeroi(item.id)}
                />
            </View>
            </>
          )}
        />
      )}
    </View>
  );
};

export default CardHerois;
