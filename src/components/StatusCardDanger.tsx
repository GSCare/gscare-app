import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { CardRemedy } from "./CardRemedy";
import { RegistrationActivitiesHealth } from "./RegistrationActivitiesHealth";
import { TimeCard } from "./TimeCard";
import { AntDesign } from '@expo/vector-icons';

export function StatusCardDanger() {
  const [showCards, setShowCards] = useState(true);
  const [arrowRotation, setArrowRotation] = useState(0);

  const toggleShowCards = () => {
    setShowCards(!showCards);
    setArrowRotation(arrowRotation === 0 ? 90 : 0); // Rotate arrow 90 degrees if it's not rotated, otherwise rotate it back to 0
  };

  return (
    <View className="flex-1">
      <View className="flex-row mt-10 mb-5 ml-10">
        <TouchableOpacity
          className="flex-row items-center p-2"
          onPress={toggleShowCards}
        >
          <Text className="mr-2 text-base font-bold">Intercorrências</Text>
          <AntDesign name="caretdown" size={15} color="black"
            style={{ transform: [{ rotate: `${arrowRotation}deg` }] }}
          />
        </TouchableOpacity>
      </View>
      {showCards && (
        <View className="pl-2">
          <CardRemedy />
          <RegistrationActivitiesHealth />
          <TimeCard />
        </View>
      )}
    </View>
  );
}
