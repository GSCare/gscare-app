import React from "react";
import { View, Text } from "react-native";

interface IProps {
  nomePatologia: string;
  description: string;

}

export const CardPatologia = ({ nomePatologia, description }: IProps) => {
  return (
    <View className="bg-[#f3f1f8] rounded-lg p-4 m-4 shadow-md shadow-black mb-4">
      <Text className="text-lg font-semibold mb-2">{nomePatologia}</Text>
      <View className="border-b-2 border-gray-300 mb-2"></View>
      <Text className="text-base mb-2">Descrição: {description}</Text>
    </View>
  );
};