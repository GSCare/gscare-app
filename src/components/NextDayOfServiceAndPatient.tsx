import { Center, HStack, Icon, Text } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'

export function NextDayOfServiceAndPatient() {
  return (
    <HStack mt={2} bg="blue.100" borderRadius={4} p={2} justifyContent="space-between">
    <Text color="blue.500" borderColor="blue.300" px={2} borderRightWidth={2}>
      01/01
    </Text>

    <Text color="blue.500">
      sr. jose afonso
    </Text>
    {/* <MaterialIcons name="visibility" /> */}
    <Center>
      <Icon 
        as={MaterialIcons}
        name="visibility"
        color="blue.500"
        size={5}
        mr={1}
      />
    </Center>
  </HStack>
  )
}