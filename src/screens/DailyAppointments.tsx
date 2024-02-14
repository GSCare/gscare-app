import { DescPageHeader } from "@components/DescPageHeader";
import { PageHeader } from "@components/PageHeader";
import { Text, View } from "react-native";

export function DailyAppointments() {
  return (
    <View className='flex-1 flex-col'>
      <PageHeader title='Consultas do Dia' />
      <DescPageHeader title="Consultas do Dia" />
    </View>
  )
} 