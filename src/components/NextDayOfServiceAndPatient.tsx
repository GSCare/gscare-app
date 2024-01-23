
import { MaterialIcons } from '@expo/vector-icons'
import { Text, View } from "react-native";

interface Props {
  date?: string
  title?: string
  color?: string
  typeList?: string
}

export function NextDayOfServiceAndPatient({ date, title, color, typeList }: Props) {

  return (
    <View className='mt-2 bg-blue-100 rounded-md p-2 justify-between flex-row'>
      <Text className='text-blue-500 border-blue-400 px-2 border-r-2'>
        01/01
      </Text>

      <Text className='text-blue-500'>
        sr. jose afonso
      </Text>
      {/* <MaterialIcons name="visibility" /> */}
      <View>
        <MaterialIcons name="visibility" size={25} m={1} color='blue' />
      </View>
    </View>
  )
}