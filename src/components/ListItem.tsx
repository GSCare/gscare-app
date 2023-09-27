import { Center, HStack, Icon, Text } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'

interface Props {
  date?: string
  title?: string
  color?: string
  typeList?: string
}

export function ListItem({date,title,color,typeList}: Props) {

  return (
    <HStack mt={2} bg="blueGray.200" borderRadius={4} p={4} justifyContent="space-between">
      <Text color="blue.500" borderColor="blue.500" pr={4} borderRightWidth={2}>
        14:20
      </Text>

      <Text color="blue.500" maxWidth="70%" noOfLines={1}>
        Dorflex-300ml
      </Text>

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