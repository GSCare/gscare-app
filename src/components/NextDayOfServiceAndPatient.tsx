
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
    <View className="mt-2 bg-[#f7fafc] rounded-md p-4 flex-row items-center justify-between">
      <Text className='text-blue-500 border-blue-400 px-2 border-r-2'>
        01/01
      </Text>

      <Text className='text-blue-500'>
        sr. jose afonso
      </Text>
      {/* <MaterialIcons name="visibility" /> */}
      <View className="bg-blue-500 p-1 rounded-full">
      <MaterialIcons name="visibility" size={24} color="white" />
      </View>
    </View>
  )
}