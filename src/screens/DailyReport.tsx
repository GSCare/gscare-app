import { DescPageHeader } from "@components/DescPageHeader";
import { MaterialIcons } from '@expo/vector-icons';
import { PageHeader } from "@components/PageHeader";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { NextDayOfServiceAndPatient } from "@components/NextDayOfServiceAndPatient";

export function DailyReport() {
  const [reportSent, setReportSent] = useState(false);

  return (
    <View className='flex-1 flex-col'>
      <PageHeader title='relatório diário' />
      <DescPageHeader title="Relatório diário" />

      <View className="justify-between px-10">
        <View className="bg=blue-100 p-12 rounded-lg items-center">
          <View className="justify-center items-center">
            {
              reportSent
                ?
                <MaterialIcons className='' name="event-available" size={70} color='green' />
                :
                <MaterialIcons className='mt-10' name="event-busy" size={70} color='red' />
            }
            {/* <Text color={reportSent ? "green.400" : "red.400"} px={2}>Relatório diário</Text> */}
            <Text className="text-red-400 px-2">Relatório diário</Text>
            <Text className="text-red-400 px-2">{reportSent ? " enviado" : " pendente"}</Text>
          </View>
        </View>

        <View>
          <Text className="text-orange-400 pl-1"> últimos 3 dias: </Text>
          <ScrollView className="h-56" showsVerticalScrollIndicator={false}>
            <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient />
            {/* ontem - anteontem - antes de ontem */}
            {/* <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient /> */}
          </ScrollView>
        </View>
      </View>

      <View className="absolute bottom-4 right-4">
        <TouchableOpacity onPress={() => {
          // TODO: abrir o formulário
        }}>
          <View className="bg-orange-300 rounded-full p-2">
            <MaterialIcons name="add" size={25} m={2} color='white' />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}