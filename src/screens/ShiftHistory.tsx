import React from "react";
import { ScrollView, View } from "react-native";
import { DescPageHeader } from "@components/DescPageHeader";
import { PageHeader } from "@components/PageHeader";
import CardShiftHistory from "@components/CardShiftHistory";


export function ShiftHistory() {
  return (
    <View className="flex-1">
      <PageHeader title="Histórico de plantões" />
      <View className="mt-10">
        <ScrollView>
          <CardShiftHistory data="20/04/2005" nomePlantao="Nome plantao 24hrs" statusPlantao="Plantao disponivel" />
          <CardShiftHistory data="19/09/2205" nomePlantao="Nome plantao 24hrs" statusPlantao="Plantao disponivel" />
          <CardShiftHistory data="22/09/2705" nomePlantao="Nome plantao 24hrs" statusPlantao="Plantao disponivel" />
          <CardShiftHistory data="28/04/2005" nomePlantao="Nome plantao 24hrs" statusPlantao="Plantao disponivel" />
          <CardShiftHistory data="01/08/2005" nomePlantao="Nome plantao 24hrs" statusPlantao="Plantao disponivel" />
          <CardShiftHistory data="02/03/2005" nomePlantao="Nome plantao 24hrs" statusPlantao="Plantao disponivel" />
          <CardShiftHistory data="14/04/2005" nomePlantao="Nome plantao 24hrs" statusPlantao="Plantao disponivel" />
          <CardShiftHistory data="07/04/2005" nomePlantao="Nome plantao 24hrs" statusPlantao="Plantao disponivel" />
        </ScrollView>
      </View>
    </View>
  );
}