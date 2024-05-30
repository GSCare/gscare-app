import React from "react";
import { ScrollView, View } from "react-native";
import { DescPageHeader } from "@components/DescPageHeader";
import { PageHeader } from "@components/PageHeader";
import { CardMedicament } from "@components/CardMedicament";
;


export function MedicamentosPacienteAtual() {
  return (
    <View className="flex-1">

      <View className="mt-10">
        <ScrollView className="mx-5">
          <CardMedicament nomeMedicamento="Dorflex" doseMedicamento="5ml" horaMedicamento="20:00" />
          <CardMedicament nomeMedicamento="Dorflex" doseMedicamento="10ml" horaMedicamento="21:00" />
          <CardMedicament nomeMedicamento="Dipirona" doseMedicamento="25ml" horaMedicamento="10:00" />
          <CardMedicament nomeMedicamento="Xarope" doseMedicamento="65ml" horaMedicamento="11:00" />
          <CardMedicament nomeMedicamento="Dorflex" doseMedicamento="52ml" horaMedicamento="00:00" />
          <CardMedicament nomeMedicamento="Xarope" doseMedicamento="123ml" horaMedicamento="05:00" />
          <CardMedicament nomeMedicamento="Dipirona" doseMedicamento="90ml" horaMedicamento="20:00" />
          <CardMedicament nomeMedicamento="Dorflex" doseMedicamento="52ml" horaMedicamento="20:00" />
        </ScrollView>
      </View>
    </View>
  );
}