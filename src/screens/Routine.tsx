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
import CardQuestions from "@components/CardQuestions";
import { ButtonPeopleCare } from "@components/ButtonPeopleCare";
import { ButtonGroup } from "react-native-elements";

export function Routine() {
  return (
    <View className="flex-1">

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-col mt-10 mb-5 ml-8">
          <Text className="font-bold text-base">Rotinas</Text>
          <View className="mt-4 flex-row">
            <View className="mr-2 border-2 w-16 rounded-md p-1">
              <Text className="font-bold text-sm m-auto">17/abr</Text>
            </View>
            <View>
              <Text className="font-bold text-sm m-auto">Segunda-feira</Text>
            </View>
          </View>
        </View>
        <StatusCardDanger />
        <StatusCardRoutine />
        <View className="m-5 flex-1">
          <CardQuestions />
          <CardQuestions />
          <CardQuestions />
          <CardQuestions />
          <View className="w-1/2 m-auto">
            <TouchableOpacity className='border-[1px] border-gray-300 bg-blue-500 p-2 rounded'>
              <Text className='m-auto text-lg text-[#ffff] font-bold'>Finalizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}