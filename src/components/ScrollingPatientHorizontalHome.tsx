import React from "react";
import { View, ScrollView, Text } from "react-native";
import { HomeButtonPatient } from "./HomeButtonPatient";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppRoutes } from "@routes/app.routes";


type NavigationType = NavigationProp<AppRoutes>;

export function ScrollingPatientHorizontalHome() {
  const navigation = useNavigation<NavigationType>();

  const handleButtonPress = (routeName: keyof AppRoutes) => {
    navigation.navigate(routeName);
  };
  // Todas as descrições devem ser curtas, para não quebrar o componente;
  // a prop de descrição do componente em questão é "desc";
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

      <HomeButtonPatient
        desc="Agenda de Trabalho"
        icon="perm-contact-calendar"
        handleButtonPress={handleButtonPress}
        parametro="patientCalendar"
        color="purple"
      />

    </View>
  );
}
