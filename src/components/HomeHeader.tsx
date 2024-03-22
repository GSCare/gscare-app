import { MaterialIcons } from '@expo/vector-icons'

import { UserPhoto } from "./UserPhoto";
import { Text, TouchableOpacity, View } from "react-native";

export function HomeHeader() {
  return (
    <View className="bg-[#f7fafc] pt-11 pb-5 px-8 flex-row">
      <View className="flex-1">
        <Text className="text-orange-500 font-bold text-base max-w-150 text-nowrap truncate">
          GSCare
        </Text>
      </View>

      {/* <TouchableOpacity>
        <Icon 
          as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
        />
      </TouchableOpacity> */}
    </View>
  )
}