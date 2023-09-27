import { DescPageHeader } from "@components/DescPageHeader";
import { MaterialIcons } from '@expo/vector-icons';
import { PageHeader } from "@components/PageHeader";
import { VStack, Fab, Icon, View, Text, Box, TextArea, HStack, Input } from "native-base";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { Button } from "@components/Button";

export function ClientsPathologies() {
  const [textAreaValue, setTextAreaValue] = useState("");

  return (
    <VStack flex={1}>
      <PageHeader title='Patologias do cliente'/>
      
      <DescPageHeader title="Nome pacientes da semana"/>

      <HStack justifyContent="space-around" flex={1} py={6}>
        <VStack flex={1} px={10}>
          <HStack space={0} w="100%" justifyContent={"space-between"} py={3}>
            <Input placeholder="Nome" w="70%" />
            <Input placeholder="Idade" w="25%" />
          </HStack>
          <Box alignItems="center" py={3}>
            <TextArea
              autoCompleteType="off"
              value={textAreaValue}
              onChangeText={(text) => setTextAreaValue(text)}
              placeholder="Patologias"
              w="100%"
              maxW="300"
            />
          </Box>
          <Box alignItems="center" py={3}>
            <TextArea
              autoCompleteType="off"
              value={textAreaValue}
              onChangeText={(text) => setTextAreaValue(text)}
              placeholder="Descrição"
              w="100%"
              maxW="300"
              h='300'
            />
          </Box>
          <Button title="Atualizar" />
        </VStack>
      </HStack>
      
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