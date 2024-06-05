import React from "react";
import { View, ScrollView, Text } from "react-native";
import { HomeButtonOptionTools } from "./HomeButtonOptionTools";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppRoutes } from "@routes/app.routes";


type NavigationType = NavigationProp<AppRoutes>;

export function ScrollingEmployeeHorizontalHome() {
  const navigation = useNavigation<NavigationType>();

  const handleButtonPress = (routeName: keyof AppRoutes) => {
    navigation.navigate(routeName);
  };

  return (
    <ScrollView
      className="flex-row"
      horizontal showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <HomeButtonOptionTools
        desc="Patologias"
        icon="perm-contact-calendar"
        handleButtonPress={handleButtonPress}
        parametro="clientsPathologies"
        color="medium"
      />
      <HomeButtonOptionTools
        desc="Medicamentos"
        icon="perm-contact-calendar"
        handleButtonPress={handleButtonPress}
        parametro="medicamentosPacienteAtual"
        color="light"
      />
      <HomeButtonOptionTools
        desc="Contatos"
        icon="perm-contact-calendar"
        handleButtonPress={handleButtonPress}
        parametro="helpScreen"
        color="medium"
      />
      <HomeButtonOptionTools
        desc="Alergias"
        icon="perm-contact-calendar"
        handleButtonPress={handleButtonPress}
        parametro="alergias"
        color="light"
      />
      <HomeButtonOptionTools
        desc="Lista de Compras"
        icon="perm-contact-calendar"
        handleButtonPress={handleButtonPress}
        parametro="shoppingList"
        color="medium"
      />
    </ScrollView>
  );
}
