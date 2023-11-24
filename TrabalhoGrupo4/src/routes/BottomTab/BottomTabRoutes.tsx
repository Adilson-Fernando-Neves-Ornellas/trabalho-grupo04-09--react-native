/**
 * Descrição: Este arquivo contém a implementação das rotas da barra inferior de navegação.
 */

import React from "react";
import { Image } from "react-native";
import Home from "../../pages/Home";
import Time from "../../pages/Time";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TimeIcon from "../../assets/Images/teamButton.png";
import HomeIcon from "../../assets/Images/heroesButton.png";
import { AssembleProvider } from "../../Context/AssembleContext";

// Definindo o tipo para os parâmetros de navegação da barra inferior
export type RootTabParamList = {
  Home: {};
  Time: {};
  About: {};
};

// Criando o navegador da barra inferior
const Tab = createBottomTabNavigator<RootTabParamList>();

/**
 * Componente que representa as rotas da barra inferior de navegação.
 * @returns {JSX.Element} - Elemento JSX representando as rotas.
 */
export default function BottomTabRoutes() {
  return (
    // Provedor do contexto AssembleProvider para as páginas Home e Time
    <AssembleProvider>
      {/* Navegador de abas inferiores */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#5F0900", paddingBottom: 2 },
          tabBarInactiveTintColor: "#aaa",
          tabBarActiveTintColor: "#fff",
          tabBarHideOnKeyboard: true,
        }}
      >
        {/* Configuração da tela Home na barra inferior */}
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <Image
                resizeMode="contain"
                source={HomeIcon}
                style={{ width: 80, height: 80 }}
              />
            ),
          }}
          name="Home"
          component={Home}
        />

        {/* Configuração da tela Time na barra inferior */}
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <Image
                resizeMode="contain"
                source={TimeIcon}
                style={{ width: 80, height: 80 }}
              />
            ),
          }}
          name="Time"
          component={Time}
        />
      </Tab.Navigator>
    </AssembleProvider>
  );
}
