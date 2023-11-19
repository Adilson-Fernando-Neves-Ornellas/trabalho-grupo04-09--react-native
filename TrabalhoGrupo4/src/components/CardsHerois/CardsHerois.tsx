import { FlatList, View, Image, Text, Button } from "react-native";
import Style from "./Style";
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
    // console.log(response.data)
  };

  useEffect(() => {
    getherois();
  }, []);

  return (
    <View style={Style.containerCards}>
      <FlatList
        style={Style.cardCarrosel}
        // horizontal={true}
        data={listaHerois}
        renderItem={({ item }) => (
          <View style={Style.div}>
            <Image
              source={{ uri: item.img }}
              style={{ width: 100, height: 150 }}
            />
            <View style={Style.infoCard}>
              <Text style={[Style.textcard, {marginTop: 8}]}>{item.nome}</Text>
              <Text style={Style.textcard}> Força: {item.forca}</Text>
              <Text style={[Style.textcard, {marginBottom: 24}]}> Defesa: {item.defesa}</Text>
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
