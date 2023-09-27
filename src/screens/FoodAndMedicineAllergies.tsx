import { DescPageHeader } from "@components/DescPageHeader";
import { MaterialIcons } from '@expo/vector-icons';
import { PageHeader } from "@components/PageHeader";
import { VStack, Fab, Icon, View, Text, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { NextDayOfServiceAndPatient } from "@components/NextDayOfServiceAndPatient";
import { ListItem } from "@components/ListItem";

export function FoodAndMedicineAllergies() {
  return (
    <VStack flex={1}>
      <PageHeader title='Alergias alimentares'/>
      
      <DescPageHeader title="Nome pacientes da semana"/>

      <VStack justifyContent="space-around" flex={1}  px={10}>
        <VStack py={6}>
          <Text pl={1} fontSize='md' color="orange.400"> Lista de medicamentos: </Text>
          <ScrollView showsVerticalScrollIndicator={false} h="100%">
            <ListItem />
            <ListItem />
            <ListItem />
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