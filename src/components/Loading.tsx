import { Spinner, Center } from "native-base";
import { View } from "react-native";

export function Loading() {
  return (
    <View className='flex-1 bg-gray-700 items-center justify-center'>
      <Spinner color="green.500" />
    </View>
  )
}