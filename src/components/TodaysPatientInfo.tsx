import { UserPhoto } from "./UserPhoto";

import cartoonHomem from '@assets/cartoonHomen.png'
import cartoonMulher from '@assets/cartoonMulher.png'
import { Text, View } from "react-native";

export function TodaysPatientInfo() {
  return (
    <View className="py-4 flex-row">
      <View className="flex-1 justify-center items-center">
        {/* <Heading py={2} mb={1} color="blue.400" fontWeight="bold" fontSize="lg" fontFamily="heading">
          Hoje: 01/12
        </Heading> */}
        <View className="bg-[#f7fafc] p-2 rounded-lg flex-row">
          <View className='w-20 h-20 my-auto mr-2'>
            <UserPhoto
              sourceUrl={'https://github.com/luisfelipeprs.png'}
              altDescription="Imagem do usuário ou empresa"/>
          </View>
          <View className="justify-evenly py-2 ml-4 max-w-lg">
            <Text className="text-gray-500 font-bold text-sm">
              Hoje: 01/02
            </Text>
            <Text className="text-orange-400 font-bold text-lg">
              Sr. Jose sobrenome fns
            </Text>
            <Text className="text-gray-500 text-md">
              Rua duque joao, bairro aqui, n302. logo na frente do banco dsadasds
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}