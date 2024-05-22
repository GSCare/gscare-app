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
      <View className="flex-row flex-1 rounded-2">
        <HomeButtonOptionTools
          desc="Relatorio diario"
          icon="perm-contact-calendar"
          handleButtonPress={handleButtonPress}
          parametro="dailyReport"
          color="purple"
        />
        <HomeButtonOptionTools
          desc="Telefones de Ajuda"
          icon="perm-contact-calendar"
          handleButtonPress={handleButtonPress}
          parametro="helpScreen"
          color="purple"
        />
        <HomeButtonOptionTools
          desc="Lista de Compras"
          icon="perm-contact-calendar"
          handleButtonPress={handleButtonPress}
          parametro="shiftHistory"
          color="purple"
        />
      </View>
    </ScrollView>
  );
}
