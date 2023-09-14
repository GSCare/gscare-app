import { Center, HStack, Heading, Text, VStack } from "native-base";
import { UserPhoto } from "./UserPhoto";

import cartoonHomem from '@assets/cartoonHomen.png'
import cartoonMulher from '@assets/cartoonMulher.png'

export function TodaysPatientInfo() {
  return (
    <HStack py={4}>
      <Center flex={1} >
        {/* <Heading py={2} mb={1} color="blue.400" fontWeight="bold" fontSize="lg" fontFamily="heading">
          Hoje: 01/12
        </Heading> */}
        <HStack  bg={"blueGray.100"} p={2} borderRadius={3}>
          <UserPhoto 
            size={32} 
            source={cartoonHomem}
            alt="Imagem do usuário ou empresa"
            borderWidth={1}
            borderColor="blue.200"
          />
          <VStack alignItems="start" justifyContent="space-evenly" py={2} maxWidth={150} ml={4}>
            <Text color="blue.400" fontWeight="bold" fontSize="sm" fontFamily="heading">
              Hoje: 01/02
            </Text>
            <Text color="orange.400" fontSize="xl" fontWeight="bold" fontFamily="mono" noOfLines={1}>
              Sr. Jose sobrenome fns
            </Text>
            <Text color="blueGray.500" fontSize="md" fontFamily="mono" noOfLines={2}>
              Rua duque joao, bairro aqui, n302. logo na frente do banco dsadasds
            </Text>
          </VStack>
        </HStack>
      </Center>
    </HStack>
  )
}