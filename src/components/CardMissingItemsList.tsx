import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { View, Text } from "react-native";

interface IProps {
  nomeAlimento: string;
  quantidade: string;
  date: string;
}

export const CardMissingItemsList = ({ nomeAlimento, quantidade, date }: IProps) => {
  const [checkbox, setCheckbox] = useState(false)
  const handleCheckBoxToggle = () => {
    setCheckbox(!checkbox);
  };
  return (
    <View className="bg-[#f3f1f8] rounded-lg p-4 w-full shadow-md shadow-black mb-4">
      <View className="flex-row justify-between px-2">
        <Text className="text-lg font-semibold mb-2">{nomeAlimento}</Text>
        <Checkbox
          value={checkbox}
          color={checkbox ? "#3B82F6" : undefined}
          onValueChange={handleCheckBoxToggle}
        />
      </View>
      <View className="border-b-2 border-gray-300 mb-2" />
      <Text className="text-base mb-2">Quantidade: {quantidade}</Text>
      <Text className="text-base">Data: {date}</Text>
    </View>
  );
};