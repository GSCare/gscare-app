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

export function Routine() {
  return (
    <View className="flex-1">
      <PageHeader title="Rotina do cliente" />
      <DescPageHeader title="Rotina do paciente" />
      <ScrollView showsVerticalScrollIndicator={false}>
      <StatusCardRoutine />
      <StatusCardDanger />
      </ScrollView>
    </View>
  );
}