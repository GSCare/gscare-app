import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { CardRemedy } from "./CardRemedy";
import { RegistrationActivitiesHealth } from "./RegistrationActivitiesHealth";
import { TimeCard } from "./TimeCard";
import { MaterialIcons } from '@expo/vector-icons';

export function StatusCardRoutine() {
  const [showCards, setShowCards] = useState(true);
  const [arrowRotation, setArrowRotation] = useState(0);

  const toggleShowCards = () => {
    setShowCards(!showCards);
    setArrowRotation(arrowRotation === 0 ? 270 : 0);
  };

  return (
    <View className="flex-1">
      <View className="flex-row mt-10 mb-5 ml-10">
        <TouchableOpacity
          className="flex-row items-center p-2 mr-40"
          onPress={toggleShowCards}
        >
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color="black"
            style={{ transform: [{ rotate: `${arrowRotation}deg` }] }}
          />
          <Text className="mr-2 text-base font-bold">Atividades</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity className="bg-blue-400 rounded-full w-9 h-9 m-auto "/*onPress={toggleShowCards}*/>
            <View className="m-auto">
              <MaterialIcons name="add" size={22} color="white" />
            </View>
          </TouchableOpacity>
        </View>
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
