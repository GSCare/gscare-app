import React from "react";
import { View, Text } from "react-native";

interface IProps{
  data:string;
  nomePlantao:string;
  statusPlantao:string;
}

const CardShiftHistory = ({ data, nomePlantao, statusPlantao }:IProps) => {
  return (
    <View className="bg-white rounded-lg p-4 shadow-md mb-4">
      <Text className="text-lg font-semibold mb-2">{data}</Text>
      <View className="border-b-2 border-gray-300 mb-2"></View>
      <Text className="text-base mb-2">{nomePlantao}</Text>
      <Text className="text-base">{statusPlantao}</Text>
    </View>
  );
};

export default CardShiftHistory;
