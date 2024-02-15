import { DescPageHeader } from "@components/DescPageHeader";
import { PageHeader } from "@components/PageHeader";
import PlantaoCard from "@components/PlantaoCard";
import { Text, View } from "react-native";

export function DailyAppointments() {
  return (
    <View className='flex-1 flex-col'>
      <PageHeader title='Consultas do Dia' />
      <DescPageHeader title="Agenda de plantões" />
      <View className="mx-4 mt-5">
        <PlantaoCard />
      </View>
    </View>
  )
} 