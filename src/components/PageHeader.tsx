import { Text, View } from "react-native";

interface Props {
  title: String
}

export function PageHeader({ title }: Props) {
  return (
    <View className="bg-[#f7fafc] pt-11 pb-5 items-center flex-row justify-center">
      <Text className="text-orange-500 text-lg font-bold">
        {title}
      </Text>
    </View>
  )
}