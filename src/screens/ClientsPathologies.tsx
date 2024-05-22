import { DescPageHeader } from "@components/DescPageHeader";
import { MaterialIcons } from '@expo/vector-icons';
import { PageHeader } from "@components/PageHeader";
import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { CardPatologia } from "@components/CardPatologia";



export function ClientsPathologies() {
  const [textAreaValue, setTextAreaValue] = useState("");

  return (
    <View className="flex-1">
      <PageHeader title="Patologias do Paciente Atual" />
      <View className="mt-10">
        <ScrollView className="mx-5">
          <CardPatologia nomePatologia="Alzheimer" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."/>
          <CardPatologia nomePatologia="Alzheimer " description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."/>
          <CardPatologia nomePatologia="Alzheimer" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit." />
        </ScrollView>
      </View>
    </View>
  )
}