import { DescPageHeader } from "@components/DescPageHeader";
import { PageHeader } from "@components/PageHeader";
import PlantaoCard from "@components/PlantaoCard";
import { ScrollView, Text, View } from "react-native";

export function DailyAppointments() {
  return (
    <View className='flex-1 flex-col'>
      <PageHeader title='Consultas do Dia' />
      <ScrollView className="">
        <View className="mx-4 my-10 flex-col flex-1">
          <View className="mb-8">
            <PlantaoCard status="Em Andamento" shift={24} start="15/02/2024" end="16/02/2024" />
          </View>
          <View className="mb-8">
            <PlantaoCard status="Concluído" shift={24} start="15/02/2024" end="16/02/2024" />
          </View>
          <View className="mb-8">
            <PlantaoCard status="Disponível" shift={24} start="15/02/2024" end="16/02/2024" />
          </View>
          <View className="">
            <PlantaoCard status="Indisponível" shift={24} start="15/02/2024" end="16/02/2024" />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}