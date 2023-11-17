import {FlatList, View, Image, Text, Button} from 'react-native';
import Style from './Style';
import React, { useEffect, useState } from 'react';
import { api } from '../../api/api';

interface Heroi {
  id: number;
  nome: string;
  descrição: string;
  img: string;
  forca: number;
  defesa: number
}


const CardHerois = () => {
  const [listaHerois, setListaHerois] = useState<Heroi[]>([]);

  function AdicionarHeroi() {

  }

  const getherois = async () => {
        const response = await api.get("/herois");
        setListaHerois(response.data);
        console.log(response.data)
  }

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
                    <Image source={item.img}  style={{ width: 100, height: 150}} />
                    <View style={Style.infoCard}>
                        <Text style={Style.textcard}>{item.nome}</Text>
                        <Text style={Style.textcard}> Força: {item.forca}</Text>
                        <Text style={Style.textcard}> Defesa: {item.defesa}</Text>
                        <Button color={"#0A27BF"}  title="Adicionar" onPress={AdicionarHeroi} />
                    </View>
              </View>
            )}
            />
    </View>
  );
};

export default CardHerois;