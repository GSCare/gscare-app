import { MaterialIcons } from '@expo/vector-icons'

import { UserPhoto } from "./UserPhoto";
import { Text, TouchableOpacity, View } from "react-native";

export function HomeHeader() {
  return (
    <View className="bg-blue-500 pt-16 pb-5 px-8 justify-center flex-row">
      <View className='w-16 h-16 mr-3'>
        <UserPhoto
          sourceUrl='https://github.com/luisfelipeprs.png'
          altDescription="Imagem do usuário ou empresa"
        />
      </View>

      <View className="flex-1">
        <Text className="text-blue-200 text-sm">
          Olá,
        </Text>
        <Text className="text-gray-100 text-base max-w-150 text-nowrap truncate">
          Luís Felipe
        </Text>


        <Text className="text-orange-400 text-xs">
          Home Care TI
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