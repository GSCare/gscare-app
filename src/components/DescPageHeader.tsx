import { Text, View } from "react-native";

interface Props {
  title: string
}

export function DescPageHeader({title}: Props) {
  return (
    <View className='flex-row justify-center pt-5 items-center'>
      <View className='flex-1 border-b-2 border-b-blue-300 ml-2'></View>
        <Text className='mx-2 text-xl text-blue-400 max-w-264'>
        {title}
        </Text>
      <View className='flex-1 border-b-2 border-b-blue-300 ml-2'></View>
    </View>
  )
}