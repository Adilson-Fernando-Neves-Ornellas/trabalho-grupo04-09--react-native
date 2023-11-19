import { FlatList, View, Image, Text, Button } from "react-native";
import styles from "./styles";
import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import colors from "../../styles/theme/colors";

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

  function AdicionarHeroi() {}

  const getherois = async () => {
    const response = await api.get("/herois");
    setListaHerois(response.data);
  };

  useEffect(() => {
    getherois();
  }, []);

  return (
    <View style={styles.containerCards}>
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
                onPress={AdicionarHeroi}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CardHerois;
