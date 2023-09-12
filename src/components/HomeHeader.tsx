import { HStack, Heading, Text, VStack, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'

import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";

export function HomeHeader() {
  return (
    <HStack bg="blue.500" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto 
        size={16} 
        source={{ uri: 'https://github.com/feh-franc0.png' }}
        alt="Imagem do usuário ou empresa"
        mr={4}
      />

      <VStack flex={1}>
        <Text color="blue.200" fontSize="sm">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md" maxWidth={150} noOfLines={1}>
          Nome do Funcionário
        </Heading>

        
        <Text color="orange.400" fontSize="xs">
          Home Care TI
        </Text>
      </VStack>

      {/* <TouchableOpacity>
        <Icon 
          as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
        />
      </TouchableOpacity> */}
    </HStack>
  )
}