import React from "react";
import { View, Text } from "react-native";

interface IProps{
  horaMedicamento:string;
  nomeMedicamento:string;
  doseMedicamento:string;
}

export const CardMedicament = ({ horaMedicamento, nomeMedicamento, doseMedicamento }:IProps) => {
  return (
    <View className="bg-[#f3f1f8] rounded-lg p-4 m-4 shadow-md shadow-black mb-4">
      <Text className="text-lg font-semibold mb-2">{horaMedicamento}</Text>
      <View className="border-b-2 border-gray-300 mb-2"></View>
      <Text className="text-base mb-2">Medicamento: {nomeMedicamento}</Text>
      <Text className="text-base">Dose: {doseMedicamento}</Text>
    </View>
  );
};