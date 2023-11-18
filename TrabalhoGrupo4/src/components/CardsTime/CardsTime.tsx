import { FlatList, View, Image, Text, Button } from "react-native";
import Style from "./Style";
import React, { useEffect, useState } from "react";
import { api } from "../../api/api";

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

  function AdicionarHeroi() {}

  const getherois = async () => {
    const response = await api.get("/herois");
    setListaHerois(response.data);
  };

  useEffect(() => {
    getherois();
  }, []);

  return (
    <View style={Style.containerCards}>
      <FlatList
        style={Style.cardCarrosel}
        numColumns={3}
        data={listaHerois}
        renderItem={({ item }) => (
          <View style={Style.div}>
            <Image
              source={{ uri: item.img }}
              style={{ width: 100, height: 150 }}
            />
              <Text style={Style.textcard}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CardsTime;
