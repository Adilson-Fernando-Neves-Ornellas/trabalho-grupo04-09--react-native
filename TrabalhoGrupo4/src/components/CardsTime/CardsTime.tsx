import { FlatList, View, Image, Text } from "react-native";
import styles from "./styles";
import React, { useState, useContext } from "react";
import { api } from "../../api/api";
import superGif from "../../assets/Images/heroload.gif";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { Button } from "../Button";
import { AssembleContext, Heroi } from "../../Context/AssembleContext";
import colors from "../../styles/theme/colors";

const CardsTime = () => {
  const { setListaHerois } = useContext(AssembleContext);
  const [listaHeroisTime, setListaHeroisTime] = useState<Heroi[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      getherois();
    }, [])
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getherois = async () => {
    const asyncId = await AsyncStorage.getItem("@user_id");
    if (asyncId !== null) {
      const idUsuario = JSON.parse(asyncId);
      const responseListaHerois = await api.get("/teamHerois", {
        params: { idUsuario: idUsuario },
      });
      setListaHeroisTime(responseListaHerois.data[0].herois);
      setListaHerois(responseListaHerois.data[0].herois);
    }
    setIsLoading(false);
  };

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
        const listaTimeAtualizada = listaHeroisTime.filter(
          (heroi: Heroi) => heroi.id !== idHeroi
        );
        const modeloAPi = {
          id: idteamHerois,
          idUsuario: idUsuario,
          herois: [...listaTimeAtualizada],
        };

        try {
          await api.put(`/teamHerois/${idteamHerois}`, modeloAPi);
        } catch (error) {
          alert("Herói excluido com sucesso!");
          setListaHerois(listaTimeAtualizada);
          setListaHeroisTime(listaTimeAtualizada);
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
          <Image style={{ maxWidth: "100%", maxHeight: '80%' }} source={superGif} />
        </View>
      ) : listaHeroisTime.length > 0 ? (
        <View style= {styles.containerCards} >
            {listaHeroisTime.map((item) => (
                <View key={item.id} style={styles.card}>
                <Image
                    source={{uri: item.img}}
                    style={{width: 100, height: 150}} />
                <Text style={styles.textCard}>{item.nome}</Text>
                <Button
                  buttonHeight={22}
                  buttonWidth={100}
                  text="Excluir"
                  onPress={() => ExcluirHeroi(item.id)}
                />
                </View>
            ))}
        </View>
        // <FlatList
        //   style={styles.cardCarrosel}
        //   numColumns={2}
        //   data={listaHeroisTime}
        //   contentContainerStyle={{flexDirection: 'column', alignItems: 'center'}}
        //   renderItem={({ item }) => (
        //     <View key={item.id} style={styles.div}>
        //       <Image
        //         source={{ uri: item.img }}
        //         style={{ width: 100, height: 150 }}
        //       />
        //       <Text style={styles.textCard}>{item.nome}</Text>
        //       <Button
        //         buttonHeight={22}
        //         buttonWidth={100}
        //         text="Excluir"
        //         onPress={() => ExcluirHeroi(item.id)}
        //       />
        //     </View>
        //   )}
        // />
      ) : (
        <View style={{width:'100%', backgroundColor:colors.redBackground}}>
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
