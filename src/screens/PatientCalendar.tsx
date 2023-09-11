import { HomeHeader } from "@components/HomeHeader";
import { Center, Text, VStack } from "native-base";

export function PatientCalendar() {
  return (
    <Center flex={1}>
      <HomeHeader />
      <VStack flex={1}>
        <Text>calendario de pacientes</Text>
      </VStack>
    </Center>
  )
}