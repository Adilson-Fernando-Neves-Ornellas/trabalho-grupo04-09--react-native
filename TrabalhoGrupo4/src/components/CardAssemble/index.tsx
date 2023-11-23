import { useContext} from "react"
import { AssembleContext } from "../../Context/AssembleContext"
import { Image, Text, View } from "react-native"
import { styles } from './styles'


export const CardAssemble = () => {
    const { listaHerois } = useContext(AssembleContext)

    return (
        <View style= {styles.containerCards} >
            {listaHerois.map((item) => (
                <View key={item.id} style={styles.card}>
                <Image
                    source={{uri: item.img}}
                    style={{width: 100, height: 150}} />
                <Text style={styles.textCard}>{item.nome}</Text>
                </View>
            ))}
        </View>
    )
}