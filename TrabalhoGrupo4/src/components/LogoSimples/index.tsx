import { Image, View, ViewProps } from 'react-native'
import { styles } from './styles'
import LogoTeamHero from '../../assets/Images/TeamHeroesLogo.png'

interface LogoProps extends ViewProps {
    widthLogo: any;
    heightLogo: any
  }

export const Logo = ({ widthLogo, heightLogo, ...rest }: LogoProps) => {
    return(
        <View style={styles.viewContainer}>
            <Image source={LogoTeamHero} style={[{width: widthLogo, height: heightLogo}]} />
        </View>
        
    )
}