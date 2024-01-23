
import { MaterialIcons } from '@expo/vector-icons'
import { Text, View } from "react-native";

interface Props {
  date?: string
  title?: string
  color?: string
  typeList?: string
}

export function ListItem({ date, title, color, typeList }: Props) {

  return (
    <View className="mt-2 bg-blue-200 rounded-sm p-4 justify-between flex-row">
      <Text className='text-blue-500 border-blue-500 pr-4 border-r-2'>
        14:20
      </Text>

      <Text className='text-blue-500'>
        Dorflex-300ml
      </Text>

      <View>
        <MaterialIcons className='' name="visibility" size={25} m={2} color='blue' />
      </View>
    </View>
  )
}