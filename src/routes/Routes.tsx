import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login/Login';
import Cadastro from '../pages/cadastro/Cadastro';
import Home from '../pages/home/Home';
import Time from '../pages/Time/Time';

export default function Routes() {

  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="cadastro" component={Cadastro} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="time" component={Time} />
      </Stack.Navigator>
    </NavigationContainer>
  )};
  