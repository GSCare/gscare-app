import React from "react";
import { View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppRoutes } from "@routes/app.routes";
import { HomeButtonOptionTools } from "./HomeButtonOptionTools";


type NavigationType = NavigationProp<AppRoutes>;

export function ScrollingPatientHorizontalHome() {
  const navigation = useNavigation<NavigationType>();

  const handleButtonPress = (routeName: keyof AppRoutes) => {
    navigation.navigate(routeName);
  };
  // Todas as descrições devem ser curtas, para não quebrar o componente;
  // a prop de descrição do componente em questão é "desc";
  return (
      <View className="flex-row rounded-2 justify-between">
        <HomeButtonOptionTools
          desc="Agenda de Trabalho"
          icon="perm-contact-calendar"
          handleButtonPress={handleButtonPress}
          parametro="patientCalendar"
          color="medium"
        />
        <HomeButtonOptionTools
          desc="Atendimento Atual"
          icon="perm-contact-calendar"
          handleButtonPress={handleButtonPress}
          parametro="routine"
          color="medium"
        />
      </View>

  );
}
