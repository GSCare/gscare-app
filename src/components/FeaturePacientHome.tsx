import React from "react";
import { View, ScrollView, Text } from "react-native";
import { HomeButtonPatient } from "./HomeButtonPatient";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppRoutes } from "@routes/app.routes";


type NavigationType = NavigationProp<AppRoutes>;

export function FeaturePacientHome() {
  const navigation = useNavigation<NavigationType>();

  const handleButtonPress = (routeName: keyof AppRoutes) => {
    navigation.navigate(routeName);
  };
  // Todas as descrições devem ser curtas, para não quebrar o componente;
  // a prop de descrição do componente em questão é "desc";
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <HomeButtonPatient
        desc="Relatorio"
        icon="perm-contact-calendar"
        handleButtonPress={handleButtonPress}
        parametro="dailyReport"
        color="purple"
      />
      <HomeButtonPatient
        desc="Patologias"
        icon="perm-contact-calendar"
        handleButtonPress={handleButtonPress}
        parametro="clientsPathologies"
        color="orange"
      />

    </View>
  );
}
