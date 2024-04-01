import { DescPageHeader } from "@components/DescPageHeader";
import { PageHeader } from "@components/PageHeader";
import PlantaoCard from "@components/PlantaoCard";
import { Text, View } from "react-native";

export function DailyAppointments() {
  return (
    <View className='flex-1 flex-col'>
      <PageHeader title='Consultas do Dia' />
      <View className="mx-4 my-5 flex-col flex-1 justify-around">
        <PlantaoCard status="Concluído" shift={24} start="15/02/2024" end="16/02/2024"/>
        <PlantaoCard status="Disponível" shift={24} start="15/02/2024" end="16/02/2024"/>
        <PlantaoCard status="Indisponível" shift={24} start="15/02/2024" end="16/02/2024"/>
      </View>
    </View>
  )
}