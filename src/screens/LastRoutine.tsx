import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Button } from "@components/Button";
import { DescPageHeader } from "@components/DescPageHeader";
import { PageHeader } from "@components/PageHeader";
import { UserPhoto } from "@components/UserPhoto";

import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';
import { CardRemedy } from "@components/CardRemedy";
import { RegistrationActivitiesHealth } from "@components/RegistrationActivitiesHealth";
import { TimeCard } from "@components/TimeCard";
import { StatusCardRoutine } from "@components/StatusCardRoutine";
import { StatusCardDanger } from "@components/StatusCardDanger";

interface IProps {
  date?: string
}
export function LastRoutine({ date }: IProps) {
  date = "20/04/2005"
  return (
    <View className="flex-1">
      <PageHeader title="Última Rotina de Cuidado" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="items-center">
          <View className="w-72 items-center mt-10">
            <Text className="text-2xl font-bold text-[#2d5970]">Veja o que aconteceu na última rotina do paciente</Text>
          </View>
          <View className="w-72 justify-center flex-row m-6">
            <Text className="text-base">Realizado em </Text>
            <Text className="text-base font-bold">{date}</Text>
          </View>
        </View>
        <StatusCardDanger />
        <StatusCardRoutine />
      </ScrollView>
    </View>
  );
}