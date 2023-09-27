import { DescPageHeader } from "@components/DescPageHeader";
import { MaterialIcons } from '@expo/vector-icons';
import { PageHeader } from "@components/PageHeader";
import { VStack, Fab, Icon, View, Text, Center, Heading, HStack, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { NextDayOfServiceAndPatient } from "@components/NextDayOfServiceAndPatient";

export function DailyReport() {
  const [reportSent, setReportSent] = useState(false);

  return (
    <VStack flex={1}>
      <PageHeader title='relatório diário'/>
      
      <DescPageHeader title="Relatório diário"/>

      <VStack justifyContent="space-between"  px={10}>
        <VStack bg={"blueGray.100"} p={12} borderRadius={3} alignItems={'center'}>
          <Center>
            {
              reportSent
              ?
              <Icon as={MaterialIcons} name={'event-available'} size={20} m={2} color={'green.400'}/>
              :
              <Icon as={MaterialIcons} name={'event-busy'} size={20} m={2} color={'red.400'}/>
            }
            <Text color={reportSent ? "green.400" : "red.400"} px={2}>Relatório diário</Text>
            <Text color={reportSent ? "green.400" : "red.400"} px={2}>{reportSent ? " enviado" : " pendente"}</Text>
          </Center>
        </VStack>
          
        <VStack>
          <Text pl={1} color="orange.400"> últimos 3 dias: </Text>
          <ScrollView showsVerticalScrollIndicator={false} h="56">
            <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient />
            {/* ontem - anteontem - antes de ontem */}
            {/* <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient />
            <NextDayOfServiceAndPatient /> */}
          </ScrollView>
        </VStack>
      </VStack>
      
      <View position={'absolute'} bottom={4} right={4}>
        <TouchableOpacity onPress={() => {
          // TODO: abrir o formulário
        }}>
          <View backgroundColor='orange.300' borderRadius={"full"} p={2}>
            <Icon as={MaterialIcons} name='add' size={8} m={2} color={'white'}/>
          </View>
        </TouchableOpacity>
      </View>
    </VStack>
  )
}