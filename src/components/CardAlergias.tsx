import React from "react";
import { View, Text } from "react-native";

interface IProps {
  nomeAlergias: string;
  description: string;
  tipoAlergia: 'Alimentícia' | 'Medicinal';
}

export const CardAlergias = ({ nomeAlergias, description, tipoAlergia }: IProps) => {
  return (
    <View className="bg-[#f3f1f8] rounded-lg p-4 m-4 shadow-md shadow-black mb-4">
      <Text className="text-lg font-semibold mb-2">{nomeAlergias}</Text>
      <View className="border-b-2 border-gray-300 mb-2"></View>
      <Text className="text-base mb-2">Descrição: {description}</Text>
      <Text className="text-base">Tipo da Alergia: {tipoAlergia}</Text>
    </View>
  );
};