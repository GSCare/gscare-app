import React from "react";
import { View, ScrollView } from "react-native";
import { HomeButtonOptionTools } from "./HomeButtonOptionTools";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppRoutes } from "@routes/app.routes";


type NavigationType = NavigationProp<AppRoutes>;

export function ScrollingPatientHorizontalHome() {
  const navigation = useNavigation<NavigationType>();

  const handleButtonPress = (routeName: keyof AppRoutes) => {
    navigation.navigate(routeName);
  };

  return (
    <View className="flex-1">
      <ScrollView className="flex-row" horizontal>
        <View className="rounded-2">
          <View className="flex-row">
            <HomeButtonOptionTools
              desc="Relatorio diario"
              icon="perm-contact-calendar"
              handleButtonPress={handleButtonPress}
              parametro="dailyReport"
            />
            <HomeButtonOptionTools
              desc="Patologias do paciente"
              icon="perm-contact-calendar"
              handleButtonPress={handleButtonPress}
              parametro="clientsPathologies"
            />
            <HomeButtonOptionTools
              desc="Lista de medicamentos"
              icon="timer"
              handleButtonPress={handleButtonPress}
              parametro="medicationSchedules"
            />
            <HomeButtonOptionTools
              desc="Alergias"
              icon="inventory"
              handleButtonPress={handleButtonPress}
              parametro="foodAndMedicineAllergies"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
