import { DescPageHeader } from "@components/DescPageHeader";
import { MaterialIcons } from '@expo/vector-icons';
import { PageHeader } from "@components/PageHeader";
import { VStack, Fab, Icon, View, Text, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { NextDayOfServiceAndPatient } from "@components/NextDayOfServiceAndPatient";
import { ListItem } from "@components/ListItem";

export function FoodAndMedicineAllergies() {
  return (
    <View className="flex-1 flex-col">
      <PageHeader title='Horários da medicação' />

      <DescPageHeader title="Nome pacientes da semana" />

      <View className="flex-1 flex-col justify-start px-10">
        <View className="flex-1 flex-col py-6">
          <Text className="pl-1 text-lg text-orange-400"> Lista de medicamentos: </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ListItem />
            <ListItem />
            <ListItem />
          </ScrollView>
        </View>
      </View>

      <View className="absolute bottom-4 right-4">
        <TouchableOpacity onPress={() => {
          // TODO: abrir o formulário
        }}>
          <View className="bg-orange-300 rounded-full p-2">
            <MaterialIcons name='add' size={40} m={2} color={'white'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}