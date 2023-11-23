import { useContext} from "react"
import { AssembleContext } from "../../Context/AssembleContext"
import { Image, Text, View, ScrollView, FlatList } from "react-native"
import { styles } from './styles'


export const CardAssemble = () => {
    const { listaHerois } = useContext(AssembleContext)

    return (
        <FlatList
            style={styles.flat}
            data={listaHerois}

            numColumns={3}
            contentContainerStyle={{alignItems: 'center', flexDirection: 'column'}}
            renderItem={({ item }) => (
            <>
            <View style={{}}>
                <View key={item.id} style={styles.card}>
                    <Image
                        source={{ uri: item.img }}
                        style={{ width: '90%', height: 150 }}
                        />
                    <View>
                        <Text style={[styles.textCard, { marginTop: 8 }]}>
                            {item.nome}
                        </Text>
                    </View>
                </View>
            </View>
            </>
          )}
        />
        // <View style= {styles.containerCards} >
        //     {listaHerois.map((item) => (
        //         <View key={item.id} style={styles.card}>
        //         <Image
        //             source={{uri: item.img}}
        //             style={{width: 100, height: 150}} />
        //         <Text style={styles.textCard}>{item.nome}</Text>
        //         </View>
        //     ))}
        // </View>
    )
}