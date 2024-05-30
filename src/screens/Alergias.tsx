import React from "react";
import { ScrollView, View } from "react-native";
import { DescPageHeader } from "@components/DescPageHeader";
import { PageHeader } from "@components/PageHeader";
import { CardMedicament } from "@components/CardMedicament";
import { CardAlergias } from "@components/CardAlergias";

;


export function Alergias() {
  return (
    <View className="flex-1">

      <View className="mt-10">
        <ScrollView className="mx-5">
          <CardAlergias nomeAlergias="Mel" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit." tipoAlergia="Alimentícia" />
          <CardAlergias nomeAlergias="Comida" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit." tipoAlergia="Medicinal" />
          <CardAlergias nomeAlergias="Coisa" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit." tipoAlergia="Medicinal" />
          <CardAlergias nomeAlergias="Arroz"description="Lorem ipsum dolor sit, amet consectetur adipisicing elit." tipoAlergia="Medicinal" />
          <CardAlergias nomeAlergias="Feijao" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit." tipoAlergia="Alimentícia" />
          <CardAlergias nomeAlergias="Carne"description="Lorem ipsum dolor sit, amet consectetur adipisicing elit." tipoAlergia="Alimentícia" />
          <CardAlergias nomeAlergias="Franco" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit." tipoAlergia="Medicinal" />
          <CardAlergias nomeAlergias="Eu" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit." tipoAlergia="Medicinal" />
        </ScrollView>
      </View>
    </View>
  );
}