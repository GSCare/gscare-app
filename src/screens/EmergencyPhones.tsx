import { DescPageHeader } from "@components/DescPageHeader";
import { MaterialIcons } from '@expo/vector-icons';
import { PageHeader } from "@components/PageHeader";
import { VStack, Fab, Icon, View, Text } from "native-base";
import { TouchableOpacity } from "react-native";

export function EmergencyPhones() {
  return (
    <VStack flex={1}>
      <PageHeader title='Telefones de emergencia'/>
      
      <DescPageHeader title="Nome pacientes da semana"/>

      <VStack justifyContent="space-around" flex={1}  px={10}>
        
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