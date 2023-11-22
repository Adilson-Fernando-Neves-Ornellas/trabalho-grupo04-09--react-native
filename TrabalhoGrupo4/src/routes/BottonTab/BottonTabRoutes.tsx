import {Image, Text} from "react-native";
import Home from "../../pages/Home";
import Time from "../../pages/Time";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TimeIcon from "../../assets/Images/teamButton.png"
import HomeIcon from "../../assets/Images/heroesButton.png"
import About from "../../pages/About";

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
	Home: {};
	Time: {};
	About: {};
}

export default function BottonTabRoutes() {

    return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: { backgroundColor: '#5F0900', paddingBottom: 2 },
				tabBarInactiveTintColor: '#aaa',
				tabBarActiveTintColor: '#fff',
				tabBarHideOnKeyboard:true,
				
			}}
		>
			<Tab.Screen
				options={{
					tabBarShowLabel:false,
					tabBarIcon: ({ color }) => (
						<Image
							resizeMode='contain'
							source={HomeIcon}
							style={{width: 80,height: 80}}
						/>
					)
				}}
				name="Home"
				component={Home}
			/>
			<Tab.Screen
				options={{
					tabBarShowLabel:false,
					tabBarIcon: ({ color }) => (
						<Image
							resizeMode='contain'
							source={TimeIcon}
							style={{width: 80,height: 80}}
						/>
					)
				}}
				name="Time"
				component={Time}
			/>
			<Tab.Screen
				options={{
					tabBarShowLabel:false,
					tabBarIcon: ({ color }) => (
						<Text>Sobre</Text>
					)
				}}
				name="About"
				component={About}
			/>
		</Tab.Navigator>
	);
}
