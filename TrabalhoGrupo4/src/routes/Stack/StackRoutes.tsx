import { createStackNavigator } from "@react-navigation/stack";
import BottonTabRoutes from "../BottonTab/BottonTabRoutes";

import Login from "../../pages/Login";
import Cadastro from "../../pages/Cadastro";

export default function StackRoutes() {
  const Stack = createStackNavigator();

  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="login"
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="cadastro" component={Cadastro} />
        <Stack.Screen name="home" component={BottonTabRoutes} />
      </Stack.Navigator>
  );
}
