import { Entypo } from '@expo/vector-icons';

import { UserPhoto } from "./UserPhoto";
import { Text, TouchableOpacity, View } from "react-native";

export function HomeHeader() {
  return (
    <View className="bg-[#f7fafc] pt-11 pb-5 px-2 flex-row">
      <View className="flex-1">
        <View className='flex-row gap-2 items-center'>
          <Entypo name="menu" size={24} color="black" />
          <Text className="text-orange-500 font-bold text-base max-w-150 text-nowrap truncate">
            GSCare
          </Text>
        </View>
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